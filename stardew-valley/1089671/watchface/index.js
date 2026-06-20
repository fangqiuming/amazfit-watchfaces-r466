try {
    ((() => {
        const __$$app$$__ = __$$hmAppManager$$__.currentApp;
        function getApp() {
            return __$$app$$__.app;
        }
        function getCurrentPage() {
            return __$$app$$__.current && __$$app$$__.current.module;
        }
        const __$$module$$__ = __$$app$$__.current;
        const h = new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(__$$app$$__, __$$module$$__));
        const { px } = __$$app$$__.__globals__;
        const logger = Logger.getLogger('watchface');
        __$$module$$__.module = DeviceRuntimeCore.WatchFace({
            init_view() {
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 0,
                    y: 0,
                    w: 466,
                    h: 466,
                    src: '2.png',
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_STATUS, {
                    x: 189,
                    y: 398,
                    src: '3.png',
                    type: hmUI.system_status.DISCONNECT,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 297,
                    y: 354,
                    type: hmUI.data_type.HEART,
                    font_array: [
                        '4.png',
                        '5.png',
                        '6.png',
                        '7.png',
                        '8.png',
                        '9.png',
                        '10.png',
                        '11.png',
                        '12.png',
                        '13.png'
                    ],
                    align_h: hmUI.align.RIGHT,
                    h_space: 4,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    invalid_image: '14.png',
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
                    x: 93,
                    y: 354,
                    image_array: [
                        '15.png',
                        '16.png',
                        '17.png',
                        '18.png',
                        '19.png',
                        '20.png',
                        '21.png',
                        '22.png',
                        '23.png',
                        '24.png',
                        '25.png',
                        '26.png',
                        '27.png',
                        '28.png',
                        '29.png',
                        '30.png',
                        '31.png',
                        '32.png',
                        '33.png',
                        '34.png',
                        '35.png',
                        '36.png',
                        '37.png',
                        '38.png',
                        '39.png',
                        '40.png',
                        '41.png',
                        '42.png',
                        '43.png',
                        '44.png'
                    ],
                    image_length: 30,
                    type: hmUI.data_type.STEP,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 129,
                    y: 354,
                    type: hmUI.data_type.STEP,
                    font_array: [
                        '4.png',
                        '5.png',
                        '6.png',
                        '7.png',
                        '8.png',
                        '9.png',
                        '10.png',
                        '11.png',
                        '12.png',
                        '13.png'
                    ],
                    align_h: hmUI.align.RIGHT,
                    h_space: 4,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.IMG_TIME, {
                    hour_zero: 0,
                    hour_startX: 157,
                    hour_startY: 256,
                    hour_array: [
                        '45.png',
                        '46.png',
                        '47.png',
                        '48.png',
                        '49.png',
                        '50.png',
                        '51.png',
                        '52.png',
                        '53.png',
                        '54.png'
                    ],
                    hour_space: 4,
                    hour_align: hmUI.align.RIGHT,
                    minute_zero: 1,
                    minute_startX: 245,
                    minute_startY: 256,
                    minute_array: [
                        '45.png',
                        '46.png',
                        '47.png',
                        '48.png',
                        '49.png',
                        '50.png',
                        '51.png',
                        '52.png',
                        '53.png',
                        '54.png'
                    ],
                    minute_space: 4,
                    minute_align: hmUI.align.LEFT,
                    minute_follow: 0,
                    second_zero: 1,
                    second_startX: 333,
                    second_startY: 256,
                    second_array: [
                        '45.png',
                        '46.png',
                        '47.png',
                        '48.png',
                        '49.png',
                        '50.png',
                        '51.png',
                        '52.png',
                        '53.png',
                        '54.png'
                    ],
                    second_space: 2,
                    second_align: hmUI.align.LEFT,
                    second_follow: 0,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 229,
                    y: 256,
                    w: 12,
                    h: 44,
                    src: '55.png',
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 317,
                    y: 256,
                    w: 12,
                    h: 44,
                    src: '56.png',
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 300,
                    y: 201,
                    type: hmUI.data_type.WEATHER_CURRENT,
                    font_array: [
                        '57.png',
                        '58.png',
                        '59.png',
                        '60.png',
                        '61.png',
                        '62.png',
                        '63.png',
                        '64.png',
                        '65.png',
                        '66.png'
                    ],
                    align_h: hmUI.align.CENTER_H,
                    h_space: 4,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    unit_sc: '69.png',
                    unit_tc: '69.png',
                    unit_en: '69.png',
                    negative_image: '68.png',
                    invalid_image: '67.png',
                    padding: false,
                    isCharacter: false
                });
                hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
                    x: 165,
                    y: 197,
                    image_array: [
                        '70.png',
                        '71.png',
                        '72.png',
                        '73.png',
                        '74.png',
                        '75.png',
                        '76.png',
                        '77.png',
                        '78.png',
                        '79.png',
                        '80.png',
                        '81.png',
                        '82.png',
                        '83.png',
                        '84.png',
                        '85.png',
                        '86.png',
                        '87.png',
                        '88.png',
                        '89.png',
                        '90.png',
                        '91.png',
                        '92.png',
                        '93.png',
                        '94.png',
                        '95.png',
                        '96.png',
                        '97.png',
                        '98.png'
                    ],
                    image_length: 29,
                    type: hmUI.data_type.WEATHER_CURRENT,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_WEEK, {
                    x: 179,
                    y: 141,
                    week_en: [
                        '99.png',
                        '100.png',
                        '101.png',
                        '102.png',
                        '103.png',
                        '104.png',
                        '105.png'
                    ],
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_DATE, {
                    day_startX: 307,
                    day_startY: 141,
                    day_sc_array: [
                        '106.png',
                        '107.png',
                        '108.png',
                        '109.png',
                        '110.png',
                        '111.png',
                        '112.png',
                        '113.png',
                        '114.png',
                        '115.png'
                    ],
                    day_tc_array: [
                        '106.png',
                        '107.png',
                        '108.png',
                        '109.png',
                        '110.png',
                        '111.png',
                        '112.png',
                        '113.png',
                        '114.png',
                        '115.png'
                    ],
                    day_en_array: [
                        '106.png',
                        '107.png',
                        '108.png',
                        '109.png',
                        '110.png',
                        '111.png',
                        '112.png',
                        '113.png',
                        '114.png',
                        '115.png'
                    ],
                    day_align: hmUI.align.LEFT,
                    day_zero: 0,
                    day_follow: 0,
                    day_space: 4,
                    day_is_character: false,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                this.weatherSensor = null;
                if (typeof hmSensor !== 'undefined') {
                    try {
                        this.weatherSensor = hmSensor.createSensor(hmSensor.id.WEATHER);
                    } catch (e) {
                        this.weatherSensor = null;
                    }
                }
                this.sunPointer = hmUI.createWidget(hmUI.widget.IMG, {
                    x: 0,
                    y: 0,
                    w: 466,
                    h: 466,
                    pos_x: 113,
                    pos_y: 130,
                    center_x: 130,
                    center_y: 217,
                    src: '116.png',
                    angle: 360,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                this.updateSunPointer();
                this.timeSensor = null;
                this.timeListener = null;
                if (typeof hmSensor !== 'undefined') {
                    try {
                        this.timeSensor = hmSensor.createSensor(hmSensor.id.TIME);
                        this.timeListener = () => {
                            this.updateSunPointer();
                        };
                        this.timeSensor.addEventListener(this.timeSensor.event.MINUTEEND, this.timeListener);
                    } catch (err) { }
                }
                hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
                    x: 173,
                    y: 69,
                    image_array: [
                        '117.png',
                        '118.png',
                        '119.png',
                        '120.png',
                        '121.png',
                        '122.png',
                        '123.png',
                        '124.png',
                        '125.png',
                        '126.png'
                    ],
                    image_length: 10,
                    type: hmUI.data_type.BATTERY,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_TIME, {
                    hour_zero: 0,
                    hour_startX: 157,
                    hour_startY: 256,
                    hour_array: [
                        '127.png',
                        '128.png',
                        '129.png',
                        '130.png',
                        '131.png',
                        '132.png',
                        '133.png',
                        '134.png',
                        '135.png',
                        '136.png'
                    ],
                    hour_space: 4,
                    hour_align: hmUI.align.RIGHT,
                    minute_zero: 1,
                    minute_startX: 245,
                    minute_startY: 256,
                    minute_array: [
                        '127.png',
                        '128.png',
                        '129.png',
                        '130.png',
                        '131.png',
                        '132.png',
                        '133.png',
                        '134.png',
                        '135.png',
                        '136.png'
                    ],
                    minute_space: 4,
                    minute_align: hmUI.align.LEFT,
                    minute_follow: 0,
                    enable: false,
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 229,
                    y: 256,
                    w: 12,
                    h: 44,
                    src: '137.png',
                    show_level: hmUI.show_level.ONLY_AOD
                });
                hmUI.createWidget(hmUI.widget.IMG_CLICK, {
                    x: 289,
                    y: 346,
                    w: 84,
                    h: 44,
                    type: hmUI.data_type.HEART,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_CLICK, {
                    x: 121,
                    y: 346,
                    w: 132,
                    h: 44,
                    type: hmUI.data_type.STEP,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_CLICK, {
                    x: 160,
                    y: 192,
                    w: 245,
                    h: 50,
                    type: hmUI.data_type.WEATHER_CURRENT,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_CLICK, {
                    x: 19,
                    y: 122,
                    w: 121,
                    h: 190,
                    type: hmUI.data_type.SUN_CURRENT,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.IMG_CLICK, {
                    x: 125,
                    y: 57,
                    w: 216,
                    h: 44,
                    type: hmUI.data_type.BATTERY,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
                    resume_call: () => {
                        this.updateSunPointer();
                    }
                });
                const dateClick = hmUI.createWidget(hmUI.widget.IMG, {
                    x: 146,
                    y: 120,
                    w: 276,
                    h: 70,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                dateClick.addEventListener(hmUI.event.CLICK_UP, () => {
                    try {
                        hmApp.startApp({
                            url: 'ScheduleCalScreen',
                            native: true
                        });
                    } catch (e) {
                        console.log('Jump to Calendar failed', e);
                    }
                });
            },
            updateSunPointer() {
                if (!this.sunPointer) return;
                const now = new Date();
                const currentHour = now.getHours() + now.getMinutes() / 60;
                let sunriseHour = 6.0;
                let sunsetHour = 18.0;
                if (this.weatherSensor) {
                    try {
                        const forecast = this.weatherSensor.getForecastWeather();
                        if (forecast && forecast.tideData && forecast.tideData.data && forecast.tideData.data[0]) {
                            const tide = forecast.tideData.data[0];
                            const sunR = tide.sunrise;
                            const sunS = tide.sunset;
                            if (sunR && sunS) {
                                if (sunR.hour === 0 && sunR.minute === 0 && sunS.hour === 0 && sunS.minute === 0) {
                                    sunriseHour = 0.0;
                                    sunsetHour = 24.0;
                                } else {
                                    sunriseHour = sunR.hour + sunR.minute / 60;
                                    sunsetHour = sunS.hour + sunS.minute / 60;
                                }
                            }
                        }
                    } catch (err) {
                        sunriseHour = 6.0;
                        sunsetHour = 18.0;
                    }
                }
                let angle = 360;
                if (currentHour >= sunriseHour && currentHour < sunsetHour) {
                    const progress = (currentHour - sunriseHour) / (sunsetHour - sunriseHour);
                    angle = 210 + progress * 90;
                } else {
                    const dawnStart = Math.max(2.0, sunriseHour - 2.0);
                    const adjustedHour = currentHour < 2.0 ? currentHour + 24.0 : currentHour;
                    if (adjustedHour >= sunsetHour) {
                        const totalEveningDuration = (24.0 - sunsetHour) + 2.0;
                        const elapsed = adjustedHour - sunsetHour;
                        const progress = elapsed / totalEveningDuration;
                        angle = 300 + progress * 60;
                        if (angle > 360) angle = 360;
                    } else if (currentHour < dawnStart) {
                        angle = 360;
                    } else {
                        const progress = (currentHour - dawnStart) / (sunriseHour - dawnStart);
                        angle = 180 + progress * 30;
                    }
                }
                this.sunPointer.setProperty(hmUI.prop.ANGLE, Math.round(angle));
            },
            onInit() {
                logger.log('index page.js on init invoke');
            },
            build() {
                this.init_view();
                logger.log('index page.js on ready invoke');
            },
            onDestroy() {
                logger.log('index page.js on destroy invoke');
                if (this.timeSensor && this.timeListener) {
                    try {
                        this.timeSensor.removeEventListener(this.timeSensor.event.MINUTEEND, this.timeListener);
                    } catch (e) { }
                }
            }
        });
        ;
    })());
} catch (e) {
    console.log('Mini Program Error', e);
    e && e.stack && e.stack.split(/\n/).forEach(i => console.log('error stack', i));
    ;
}