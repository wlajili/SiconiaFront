import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  subject = new BehaviorSubject<any>('');

  sendMessage(message: any) {
    this.subject.next({ content: message });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
