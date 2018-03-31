import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  // progressbar.js@1.0.0 version is used
  // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

  myFunction() {
      var x = document.getElementById("myDIV");
      if (x.innerHTML === "Drive Mode OFF") {
          x.innerHTML = "Drive Mode ON";
      var ProgressBar = require('progressbar.js')
      var bar = new ProgressBar.Circle(container, {
      color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
      strokeWidth: 3,
      trailWidth: 2,
      easing: 'easeInOut',
      duration: 5400,
      text: {
     autoStyleContainer: 'false'
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#222', width: 4.3 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 20);
      //console.log(value);

      if (value === 0) {
        circle.setText('');
      }
      else if(value === 20){

            circle.path.setAttribute('stroke', 'green');
            //console.log(circle);
      }


    }
  });

  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '4rem';

  bar.animate(1.0);  // Number from 0.0 to 1.0

}

else {
    x.innerHTML = "Drive Mode OFF";
}
}
}
