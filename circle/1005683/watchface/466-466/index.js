try {
    (() => {
        var e = __$$hmAppManager$$__.currentApp;
        const n = e.current,
            {
                px: _
            } = (new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(e, n)), e.app.__globals__),
            p = Logger.getLogger("watchface6");
        n.module = DeviceRuntimeCore.WatchFace({
            init_view() {
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 0,
                    y: 0,
                    w: 466,
                    h: 466,
                    src: "4.png",
                    show_level: hmUI.show_level.ONLY_NORMAL
                });
                let anim = hmUI.createWidget(hmUI.widget.IMG_ANIM, {
                    x: 0,
                    y: 0,
                    anim_path: "",
                    anim_prefix: "first_anim_kqjhz",
                    anim_ext: "png",
                    anim_fps: 15,
                    anim_size: 46,
                    repeat_count: 1,
                    anim_repeat: !1,
                    // display_on_restart: !0,
                    anim_status: hmUI.anim_status.START,
                    show_level: hmUI.show_level.ONLY_NORMAL
                });hmUI.createWidget(hmUI.widget.TEXT_IMG, {
                    x: 207,
                    y: 286,
                    type: hmUI.data_type.BATTERY,
                    font_array: ["5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png", "14.png"],
                    align_h: hmUI.align.CENTER_H,
                    h_space: 0,
                    show_level: hmUI.show_level.ONLY_NORMAL,
                    unit_sc: "15.png",
                    unit_tc: "15.png",
                    unit_en: "15.png",
                    padding: !1,
                    isCharacter: !1
                }), hmUI.createWidget(hmUI.widget.IMG_WEEK, {
                    x: 184,
                    y: 167,
                    week_en: ["16.png", "17.png", "18.png", "19.png", "20.png", "21.png", "22.png"],
                    week_tc: ["23.png", "24.png", "25.png", "26.png", "27.png", "28.png", "29.png"],
                    week_sc: ["30.png", "31.png", "32.png", "33.png", "34.png", "35.png", "36.png"],
                    show_level: hmUI.show_level.ONLY_NORMAL
                }), hmUI.createWidget(hmUI.widget.IMG_DATE, {
                    day_startX: 247,
                    day_startY: 167,
                    day_sc_array: ["37.png", "38.png", "39.png", "40.png", "41.png", "42.png", "43.png", "44.png", "45.png", "46.png"],
                    day_tc_array: ["37.png", "38.png", "39.png", "40.png", "41.png", "42.png", "43.png", "44.png", "45.png", "46.png"],
                    day_en_array: ["37.png", "38.png", "39.png", "40.png", "41.png", "42.png", "43.png", "44.png", "45.png", "46.png"],
                    day_align: hmUI.align.CENTER_H,
                    day_zero: 1,
                    day_follow: 0,
                    day_space: 0,
                    day_is_character: !1,
                    enable: !1,
                    show_level: hmUI.show_level.ONLY_NORMAL
                }),
                // hmUI.createWidget(hmUI.widget.TIME_POINTER, {
                //     hour_centerX: 233,
                //     hour_centerY: 233,
                //     hour_posX: 7,
                //     hour_posY: 151,
                //     hour_path: "53.png",
                //     hour_cover_path: "52.png",
                //     hour_cover_x: 221,
                //     hour_cover_y: 221,
                //     minute_centerX: 233,
                //     minute_centerY: 233,
                //     minute_posX: 7,
                //     minute_posY: 210,
                //     minute_path: "55.png",
                //     // minute_cover_path: "54.png",
                //     minute_cover_x: 225,
                //     minute_cover_y: 225,
                //     enable: !1,
                //     show_level: hmUI.show_level.ONLY_NORMAL
                // }),
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: 0,
                    y: 0,
                    w: 466,
                    h: 466,
                    src: "51.png",
                    show_level: hmUI.show_level.ONLY_AOD
                }),
                hmUI.createWidget(hmUI.widget.TIME_POINTER, {
                    hour_centerX: 233,
                    hour_centerY: 233,
                    hour_posX: 7,
                    hour_posY: 151,
                    hour_path: "53.png",
                    // hour_cover_path: "52.png",
                    hour_cover_x: 221,
                    hour_cover_y: 221,
                    enable: !1,
                    show_level: hmUI.show_level.ONLY_AOD | hmUI.show_level.ONLY_NORMAL
                })
                hmUI.createWidget(hmUI.widget.CIRCLE, {
                    center_x: 233,
                    center_y: 233,
                    radius: 12,
                    color: 0x8ae756,
                    alpha: 255,
                    show_level: hmUI.show_level.ONLY_AOD | hmUI.show_level.ONLY_NORMAL
                  })
                hmUI.createWidget(hmUI.widget.TIME_POINTER, {

                    minute_centerX: 233,
                    minute_centerY: 233,
                    minute_posX: 7,
                    minute_posY: 210,
                    minute_path: "55.png",
                    // minute_cover_path: "49.png",
                    minute_cover_x: 225,
                    minute_cover_y: 225,
                    enable: !1,
                    show_level: hmUI.show_level.ONLY_AOD | hmUI.show_level.ONLY_NORMAL
                })

                 hmUI.createWidget(hmUI.widget.CIRCLE, {
                    center_x: 233,
                    center_y: 233,
                    radius: 8,
                    color: 0x222222,
                    alpha: 255,
                    show_level: hmUI.show_level.ONLY_AOD | hmUI.show_level.ONLY_NORMAL
                  })
                hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
                    resume_call: function () {
                      console.log('ui resume');
                      anim.setProperty(
                        hmUI.prop.ANIM_STATUS,
                        hmUI.anim_status.START
                      );
                    },
                    pause_call: function () {
                      console.log('ui pause');
                    },
                  });
            },
            onInit() {
                p.log("index page.js on init invoke")
            },
            build() {
                this.init_view(), p.log("index page.js on ready invoke")
            },
            onDestory() {
                p.log("index page.js on destory invoke")
            }
        })
    })()
} catch (e) {
    console.log(e)
}