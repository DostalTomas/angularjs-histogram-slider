import {SliderAlgorithm} from './slider-algorithm.interface';

export default class Log10Algorithm implements SliderAlgorithm {
    public getPosition(value, min, max) {
        const minv = Math.log(min);
        const maxv = Math.log(max);

        const scale = (maxv - minv) / 100;

        return (Math.log(value) - minv) / scale;
    }

    public getValue(positionPercent, min, max) {
        const minv = Math.log(min);
        const maxv = Math.log(max);

        if (positionPercent === 0) {
            return min;
        }

        if (positionPercent === 100) {
            return max;
        }

        // calculate adjustment factor
        const scale = (maxv - minv) / 100;

        return Math.floor(Math.exp(minv + (scale * positionPercent))) || 0;
    }
}
