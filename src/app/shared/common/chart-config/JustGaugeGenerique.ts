export class JustGaugeGenerique {

    title: string;
    color: string;
    gaugeOpt: {};

    constructor(title: string, color: string) {
        this.title = title;
        this.color = color;
    }

    getGaugeOpt() {

        this.gaugeOpt = {
            min: 0,
            max: 100,
            title: this.title,
            titleFontFamily: 'Roboto light',
            symbol: '%',
            valueFontColor: this.color,
            valueFontFamily: 'Roboto light',
            relativeGaugeSize: true,
            gaugeWidthScale: 0.6,
            gaugeColor: '#e1e1e1',
            shadowOpacity: 0,
            levelColors: [
                this.color
            ],
            pointer: false,
            counter: true,
        };

        return this.gaugeOpt;
    }

}
