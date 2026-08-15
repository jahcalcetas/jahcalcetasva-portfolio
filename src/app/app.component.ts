import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { portfolio } from './portfolio.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly data=portfolio;
  readonly pages=['Home','What I Do','About','What I Bring','Projects','Skills','Contact'];
  readonly tabs=[{label:'Home',page:0,icon:'home'},{label:'About',page:2,icon:'user'},{label:'Projects',page:4,icon:'folder'},{label:'Skills',page:5,icon:'star'},{label:'Contact',page:6,icon:'mail'}];
  current=signal(0); animating=signal(false); direction=signal<'forward'|'backward'>('forward'); private touchX=0; private touchY=0;
  get spreadStart(){return Math.min(Math.floor(this.current()/2)*2,6)}
  get activeTab(){const p=this.current();return p<2?'Home':p<4?'About':p===4?'Projects':p===5?'Skills':'Contact'}
  navigate(target:number){if(this.animating()||target<0||target>=7||target===this.current())return;this.direction.set(target>this.current()?'forward':'backward');this.animating.set(true);setTimeout(()=>this.current.set(target),260);setTimeout(()=>this.animating.set(false),760)}
  next(){this.navigate(this.current()+1)} previous(){this.navigate(this.current()-1)}
  onPointerDown(e:PointerEvent){if(e.pointerType!=='mouse'){this.touchX=e.clientX;this.touchY=e.clientY}}
  onPointerUp(e:PointerEvent){if(e.pointerType==='mouse')return;const dx=e.clientX-this.touchX,dy=e.clientY-this.touchY;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.4)dx<0?this.next():this.previous()}
  @HostListener('window:keydown',['$event']) onKey(e:KeyboardEvent){if(e.key==='ArrowRight')this.next();if(e.key==='ArrowLeft')this.previous()}
  icon(n:string){return ({home:'⌂',user:'◯',folder:'▱',star:'✦',mail:'✉',inbox:'⌑',grid:'▦',chat:'◌',search:'⌕',spark:'⚡',edit:'✎'} as Record<string,string>)[n]||'·'}
}
