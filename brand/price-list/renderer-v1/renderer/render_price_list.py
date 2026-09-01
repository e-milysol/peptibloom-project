
from pathlib import Path
import json, argparse
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics

ROOT=Path(__file__).resolve().parents[1]
ASSETS=ROOT/"assets"
pdfmetrics.registerFont(TTFont("PBRegular","/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("PBBold","/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"))

C={"plum":(62/255,23/255,74/255),"plum2":(90/255,40/255,104/255),"lav":(238/255,232/255,247/255),
   "pink":(230/255,139/255,178/255),"ink":(43/255,33/255,48/255),"muted":(117/255,106/255,121/255),
   "line":(217/255,205/255,229/255),"white":(1,1,1)}
W,H=A4; M=34
def fill(c,k): c.setFillColorRGB(*C[k])
def stroke(c,k): c.setStrokeColorRGB(*C[k])

def draw_bg(c):
    c.drawImage(ImageReader(str(ASSETS/"papel_botanico_cientifico_lavanda.png")),0,0,width=W,height=H,mask="auto")

def draw_header(c,doc,mode):
    fill(c,"plum"); c.roundRect(M,H-104,W-2*M,64,14,fill=1,stroke=0)
    fill(c,"white"); c.setFont("PBBold",21); c.drawString(M+20,H-72,"PEPTIBLOOM")
    c.setFont("PBRegular",9); c.drawRightString(W-M-20,H-67,doc.get("title",""))
    c.drawRightString(W-M-20,H-82,doc.get("effective_date",""))
    fill(c,"pink"); c.roundRect(M,H-124,180,15,7,fill=1,stroke=0)
    fill(c,"white"); c.setFont("PBBold",7.2); c.drawCentredString(M+90,H-119,doc.get("ruo_notice",""))
    fill(c,"plum"); c.setFont("PBBold",10); c.drawRightString(W-M,H-119,mode)

def section(c,y,title,subtitle=""):
    fill(c,"plum"); c.setFont("PBBold",12); c.drawString(M,y,title)
    fill(c,"muted"); c.setFont("PBRegular",7.5); c.drawRightString(W-M,y,subtitle)
    stroke(c,"line"); c.setLineWidth(.7); c.line(M,y-6,W-M,y-6)
    return y-20

def promo(c,p,y):
    if not p or not p.get("enabled"): return y
    x=M; bw=W-2*M; bh=145
    # Decorative image intentionally clipped by its own rectangle, not used as text carrier.
    c.drawImage(ImageReader(str(ASSETS/"podio_floral.png")),x,y-bh,width=bw,height=bh,mask="auto")
    c.setFillColorRGB(1,1,1,.88); c.roundRect(x+90,y-119,bw-120,94,12,fill=1,stroke=0)
    fill(c,"pink"); c.roundRect(x+108,y-49,72,18,9,fill=1,stroke=0)
    fill(c,"white"); c.setFont("PBBold",7.4); c.drawCentredString(x+144,y-43,p.get("badge",""))
    fill(c,"plum"); c.setFont("PBBold",15); c.drawString(x+198,y-47,p.get("title",""))
    fill(c,"ink"); c.setFont("PBRegular",8); c.drawString(x+198,y-64,p.get("subtitle","")[:48])
    fill(c,"plum2"); c.setFont("PBBold",18); c.drawString(x+198,y-91,p.get("price",""))
    fill(c,"muted"); c.setFont("PBRegular",7); c.drawString(x+198,y-107,p.get("stock_note","")[:52])
    return y-bh-15

def table(c,y,rows):
    cols=[M,M+56,M+286,M+368,M+458]
    headers=["Código","Producto","Presentación","Estado","Precio"]
    hh=22
    fill(c,"plum2"); c.roundRect(M,y-hh,W-2*M,hh,6,fill=1,stroke=0)
    fill(c,"white"); c.setFont("PBBold",7.4)
    for i,h in enumerate(headers): c.drawString(cols[i]+6,y-15,h)
    y-=hh
    for idx,row in enumerate(rows):
        rh=26
        fill(c,"white" if idx%2==0 else "lav"); c.roundRect(M,y-rh,W-2*M,rh,3,fill=1,stroke=0)
        vals=[row.get("code",""),row.get("name",""),row.get("presentation",""),row.get("availability",""),row.get("price","")]
        for i,v in enumerate(vals):
            fill(c,"plum" if i>=3 else "ink"); c.setFont("PBBold" if i>=3 else "PBRegular",8)
            c.drawString(cols[i]+6,y-17,str(v)[:34])
        y-=rh+2
    return y

def footer(c,doc,page,total):
    stroke(c,"line"); c.line(M,32,W-M,32)
    fill(c,"muted"); c.setFont("PBRegular",6.5)
    c.drawString(M,20,doc.get("contact_line",""))
    c.drawCentredString(W/2,20,doc.get("footer_note","")[:78])
    c.drawRightString(W-M,20,f"{page}/{total}")

def page(c,doc,mode,rows,page_no,total,promo_data=None):
    draw_bg(c); draw_header(c,doc,mode); y=H-154
    if promo_data: y=promo(c,promo_data,y)
    y=section(c,y,mode,doc.get("subtitle",""))
    table(c,y,rows); footer(c,doc,page_no,total); c.showPage()

def render(data,out,composition):
    c=canvas.Canvas(str(out),pagesize=A4)
    c.setTitle("PeptiBloom Price List "+composition)
    doc=data["document"]
    if composition=="AVAILABLE":
        page(c,doc,"DISPONIBLE",data.get("available",[]),1,1,data.get("promo"))
    elif composition=="ON_DEMAND":
        page(c,doc,"BAJO PEDIDO",data.get("on_demand",[]),1,1,None)
    elif composition=="COMBINED":
        page(c,doc,"DISPONIBLE",data.get("available",[]),1,2,data.get("promo"))
        page(c,doc,"BAJO PEDIDO",data.get("on_demand",[]),2,2,None)
    else: raise ValueError(composition)
    c.save()

if __name__=="__main__":
    p=argparse.ArgumentParser()
    p.add_argument("--input",required=True); p.add_argument("--output",required=True)
    p.add_argument("--composition",choices=["AVAILABLE","ON_DEMAND","COMBINED"],default="COMBINED")
    a=p.parse_args(); data=json.loads(Path(a.input).read_text(encoding="utf-8"))
    render(data,Path(a.output),a.composition)
