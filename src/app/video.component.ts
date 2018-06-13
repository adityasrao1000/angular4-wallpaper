import {Pipe, PipeTransform, Component, NgModule} from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { VideoList } from './videolist.service';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'videos',
  templateUrl: './video.html',
  styleUrls: ['./video.css']
})
export class video {

  videos: VideoList[] = [
    {name: 'Frozen', url: 'https://www.youtube.com/embed/FLzfXQSPBOg?autoplay=0&showinfo=0&controls=0', date: '1/1/2017', interest: '95%'},
    {name: 'Ghost in Shell', url: 'https://www.youtube.com/embed/G4VmJcZR0Yg?controls=0', date: '2/1/2017', interest: '72%'},
    {name: 'Attack on Titan Season 2', url: 'https://www.youtube.com/embed/VMVol1nTbDs?controls=0', date: '4/1/2017', interest: '88%'}
  ];
}
