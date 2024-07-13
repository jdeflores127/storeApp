import { Component, ElementRef, Input, ViewChild, signal } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-waveaudio',
  standalone: true,
  imports: [],
  templateUrl: './waveaudio.component.html',
  styleUrl: './waveaudio.component.css'
})
export class WaveaudioComponent {

  private wsWaySurfer! : WaveSurfer;
  isPlaying = signal(false);
  /*La admiracion es para que desde TS no nos alerte si la variable no se inicializó*/
  @Input({required:true}) audioUrl! : string | undefined;
  @ViewChild('wave') container! : ElementRef;
  ngAfterViewInit(): void {
    this.wsWaySurfer = WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement
    })
    this.wsWaySurfer.on('play', ()=>this.isPlaying.set(true));    
    this.wsWaySurfer.on('pause', ()=>this.isPlaying.set(false));    
  }

  playPause(){
    this.wsWaySurfer.playPause();
  }

}
