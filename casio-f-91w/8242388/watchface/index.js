/*
** Watch_Face_Editor tool
** watchface js version v2.1.1
** Copyright © SashaCX75. All Rights Reserved
*/

try {
  (() => {
    //start of ignored block
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
    //const logger = Logger.getLogger('watchface_SashaCX75');
    const logger = DeviceRuntimeCore.HmLogger.getLogger('watchface_SashaCX75')
    //end of ignored block

    //dynamic modify start


    let normal_background_bg_img = ''
    let normal_distance_text_text_img = ''
    let normal_step_current_text_img = ''
    let normal_heart_rate_text_text_img = ''
    let normal_pai_weekly_text_img = ''
    let normal_system_lock_img = ''
    let normal_system_dnd_img = ''
    let normal_system_disconnect_img = ''
    let normal_system_clock_img = ''
    let normal_battery_text_text_img = ''
    let normal_battery_image_progress_img_level = ''
    let normal_temperature_current_text_img = ''
    let normal_weather_image_progress_img_level = ''
    let normal_date_img_date_week_img = ''
    let normal_date_img_date_month = ''
    let normal_date_img_date_day = ''
    let normal_digital_clock_img_time = ''
    let normal_digital_clock_minute_separator_img = ''
    let idle_digital_clock_img_time = ''
    let idle_digital_clock_minute_separator_img = ''
    let normal_alarm_jumpable_img_click = ''
    let normal_temperature_jumpable_img_click = ''
    let normal_heart_jumpable_img_click = ''
    let normal_step_jumpable_img_click = ''


    //dynamic modify end

    __$$module$$__.module = DeviceRuntimeCore.WatchFace({
      init_view() {
        //dynamic modify start


        console.log('Watch_Face.ScreenNormal');
        normal_background_bg_img = hmUI.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 0,
          w: 466,
          h: 466,
          src: '0002.png',
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_distance_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
          x: 268,
          y: 373,
          font_array: ["0068.png", "0069.png", "0070.png", "0071.png", "0072.png", "0073.png", "0074.png", "0075.png", "0076.png", "0077.png"],
          padding: false,
          h_space: 0,
          unit_sc: '0089.png',
          unit_tc: '0089.png',
          unit_en: '0089.png',
          dot_image: '0088.png',
          align_h: hmUI.align.RIGHT,
          type: hmUI.data_type.DISTANCE,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_step_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
          x: 95,
          y: 373,
          font_array: ["0068.png", "0069.png", "0070.png", "0071.png", "0072.png", "0073.png", "0074.png", "0075.png", "0076.png", "0077.png"],
          padding: false,
          h_space: 0,
          align_h: hmUI.align.CENTER_H,
          type: hmUI.data_type.STEP,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_heart_rate_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
          x: 205,
          y: 410,
          font_array: ["0068.png", "0069.png", "0070.png", "0071.png", "0072.png", "0073.png", "0074.png", "0075.png", "0076.png", "0077.png"],
          padding: false,
          h_space: 0,
          invalid_image: '148.png',
          align_h: hmUI.align.CENTER_H,
          type: hmUI.data_type.HEART,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_pai_weekly_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
          x: 121,
          y: 333,
          font_array: ["0068.png", "0069.png", "0070.png", "0071.png", "0072.png", "0073.png", "0074.png", "0075.png", "0076.png", "0077.png"],
          padding: false,
          h_space: 0,
          align_h: hmUI.align.LEFT,
          type: hmUI.data_type.PAI_WEEKLY,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_system_lock_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
          x: 297,
          y: 404,
          src: '0104.png',
          type: hmUI.system_status.LOCK,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        // normal_system_dnd_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
        //   x: 354,
        //   y: 104,
        //   src: '0102.png',
        //   type: hmUI.system_status.DISTURB,
        //   show_level: hmUI.show_level.ONLY_NORMAL,
        // });

        // normal_system_disconnect_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
        //   x: 143,
        //   y: 402,
        //   src: '0101.png',
        //   type: hmUI.system_status.DISCONNECT,
        //   show_level: hmUI.show_level.ONLY_NORMAL,
        // });

        normal_system_clock_img = hmUI.createWidget(hmUI.widget.IMG_STATUS, {
          x: 302,
          y: 337,
          src: '0056.png',
          type: hmUI.system_status.CLOCK,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_battery_text_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
          x: 60,
          y: 286,
          font_array: ["0134.png", "0135.png", "0136.png", "0137.png", "0138.png", "0139.png", "0140.png", "0141.png", "0142.png", "0143.png"],
          padding: false,
          h_space: 0,
          unit_sc: '0100.png',
          unit_tc: '0100.png',
          unit_en: '0100.png',
          align_h: hmUI.align.LEFT,
          type: hmUI.data_type.BATTERY,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_battery_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
          x: 66,
          y: 175,
          image_array: ["0057.png", "0058.png", "0059.png", "0060.png", "0061.png", "0062.png", "0063.png", "0064.png", "0065.png", "0066.png"],
          image_length: 10,
          type: hmUI.data_type.BATTERY,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_temperature_current_text_img = hmUI.createWidget(hmUI.widget.TEXT_IMG, {
          x: 148,
          y: 178,
          font_array: ["0043.png", "0044.png", "0045.png", "0046.png", "0047.png", "0048.png", "0049.png", "0050.png", "0051.png", "0052.png"],
          padding: false,
          h_space: 0,
          unit_sc: '0054.png',
          unit_tc: '0054.png',
          unit_en: '0054.png',
          invalid_image: '0053.png',
          align_h: hmUI.align.LEFT,
          type: hmUI.data_type.WEATHER_CURRENT,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_weather_image_progress_img_level = hmUI.createWidget(hmUI.widget.IMG_LEVEL, {
          x: 107,
          y: 178,
          image_array: ["0105.png", "0106.png", "0107.png", "0108.png", "0109.png", "0110.png", "0111.png", "0112.png", "0113.png", "0114.png", "0115.png", "0116.png", "0117.png", "0118.png", "0119.png", "0120.png", "0121.png", "0122.png", "0123.png", "0124.png", "0125.png", "0126.png", "0127.png", "0128.png", "0129.png", "0130.png", "0131.png", "0132.png", "0133.png"],
          image_length: 29,
          type: hmUI.data_type.WEATHER_CURRENT,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_date_img_date_week_img = hmUI.createWidget(hmUI.widget.IMG_WEEK, {
          x: 83,
          y: 168,
          week_en: ["0026.png", "0027.png", "0028.png", "0029.png", "0030.png", "0031.png", "0032.png"],
          week_tc: ["0026.png", "0027.png", "0028.png", "0029.png", "0030.png", "0031.png", "0032.png"],
          week_sc: ["0026.png", "0027.png", "0028.png", "0029.png", "0030.png", "0031.png", "0032.png"],
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_date_img_date_month = hmUI.createWidget(hmUI.widget.IMG_DATE, {
          month_startX: 337,
          month_startY: 176,
          month_sc_array: ["0033.png", "0034.png", "0035.png", "0036.png", "0037.png", "0038.png", "0039.png", "0040.png", "0041.png", "0042.png"],
          month_tc_array: ["0033.png", "0034.png", "0035.png", "0036.png", "0037.png", "0038.png", "0039.png", "0040.png", "0041.png", "0042.png"],
          month_en_array: ["0033.png", "0034.png", "0035.png", "0036.png", "0037.png", "0038.png", "0039.png", "0040.png", "0041.png", "0042.png"],
          month_zero: 1,
          month_space: 0,
          month_align: hmUI.align.LEFT,
          month_is_character: false,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_date_img_date_day = hmUI.createWidget(hmUI.widget.IMG_DATE, {
          day_startX: 255,
          day_startY: 176,
          day_sc_array: ["0033.png", "0034.png", "0035.png", "0036.png", "0037.png", "0038.png", "0039.png", "0040.png", "0041.png", "0042.png"],
          day_tc_array: ["0033.png", "0034.png", "0035.png", "0036.png", "0037.png", "0038.png", "0039.png", "0040.png", "0041.png", "0042.png"],
          day_en_array: ["0033.png", "0034.png", "0035.png", "0036.png", "0037.png", "0038.png", "0039.png", "0040.png", "0041.png", "0042.png"],
          day_zero: 1,
          day_space: 0,
          day_align: hmUI.align.LEFT,
          day_is_character: false,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_digital_clock_img_time = hmUI.createWidget(hmUI.widget.IMG_TIME, {
          hour_startX: 107,
          hour_startY: 228,
          hour_array: ["0003.png", "0004.png", "0005.png", "0006.png", "0007.png", "0008.png", "0009.png", "0010.png", "0011.png", "0012.png"],
          hour_zero: 1,
          hour_space: 0,
          hour_angle: 0,
          hour_align: hmUI.align.LEFT,

          minute_startX: 225,
          minute_startY: 228,
          minute_array: ["0003.png", "0004.png", "0005.png", "0006.png", "0007.png", "0008.png", "0009.png", "0010.png", "0011.png", "0012.png"],
          minute_zero: 1,
          minute_space: 0,
          minute_angle: 0,
          minute_follow: 0,
          minute_align: hmUI.align.LEFT,

          second_startX: 325,
          second_startY: 231,
          second_array: ["0013.png", "0014.png", "0015.png", "0016.png", "0017.png", "0018.png", "0019.png", "0020.png", "0021.png", "0022.png"],
          second_zero: 1,
          second_space: 0,
          second_angle: 0,
          second_follow: 0,
          second_align: hmUI.align.LEFT,

          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_digital_clock_minute_separator_img = hmUI.createWidget(hmUI.widget.IMG, {
          x: 189,
          y: 231,
          src: '0023.png',
          show_level: hmUI.show_level.ONLY_NORMAL,
        });


        console.log('Watch_Face.ScreenAOD');

        idle_digital_clock_img_time = hmUI.createWidget(hmUI.widget.IMG_TIME, {
          hour_startX: 107,
          hour_startY: 228,
          hour_array: ["0078.png", "0079.png", "0080.png", "0081.png", "0082.png", "0083.png", "0084.png", "0085.png", "0086.png", "0087.png"],
          hour_zero: 1,
          hour_space: 0,
          hour_angle: 0,
          hour_align: hmUI.align.LEFT,

          minute_startX: 225,
          minute_startY: 228,
          minute_array: ["0078.png", "0079.png", "0080.png", "0081.png", "0082.png", "0083.png", "0084.png", "0085.png", "0086.png", "0087.png"],
          minute_zero: 1,
          minute_space: 0,
          minute_angle: 0,
          minute_follow: 0,
          minute_align: hmUI.align.LEFT,

          show_level: hmUI.show_level.ONLY_AOD,
        });

        idle_digital_clock_minute_separator_img = hmUI.createWidget(hmUI.widget.IMG, {
          x: 189,
          y: 231,
          src: '0103.png',
          show_level: hmUI.show_level.ONLY_AOD,
        });
        console.log('Watch_Face.Shortcuts');

        normal_alarm_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
          x: 303,
          y: 333,
          w: 81,
          h: 21,
          src: 'shortcut.png',
          type: hmUI.data_type.ALARM_CLOCK,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_temperature_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
          x: 108,
          y: 175,
          w: 87,
          h: 49,
          src: 'shortcut.png',
          type: hmUI.data_type.WEATHER_CURRENT,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_heart_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
          x: 191,
          y: 393,
          w: 83,
          h: 39,
          src: 'shortcut.png',
          type: hmUI.data_type.HEART,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });

        normal_step_jumpable_img_click = hmUI.createWidget(hmUI.widget.IMG_CLICK, {
          x: 97,
          y: 357,
          w: 73,
          h: 34,
          src: 'shortcut.png',
          type: hmUI.data_type.STEP,
          show_level: hmUI.show_level.ONLY_NORMAL,
        });


        //dynamic modify end
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
      }
    });
    ;
  })();
} catch (e) {
  console.log('Mini Program Error', e);
  e && e.stack && e.stack.split(/\n/).forEach(i => console.log('error stack', i));
  ;
}