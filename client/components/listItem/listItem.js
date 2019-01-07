// components/listItem/listItem.js
import Dialog from '../../miniprogram_npm/vant-weapp/dialog/dialog';
import Toast from '../../miniprogram_npm/vant-weapp/toast/toast';
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    likeIf: false
  },


  /**
   * 组件的方法列表
   */
  methods: {
    lighten() {
      if (this.data.likeIf) {
        Dialog.confirm({
          title: '不点亮',
          message: "确认取消点亮？",
        }).then(() => {
          this.setData({
            likeIf: false
          })
        }).catch(() => {
          console.log('cancel')
        });
      } else {
        Dialog.confirm({
          title: '是否点亮',
          message: "仅标注，不通知对方，当双方相互点亮时，系统自动组成CP，并立即通知双方！最多贴3个标签， 组成CP后其他标签失效， 标签可随时更改或取消。",
          confirmButtonText: '确认点亮'
        }).then(() => {
          this.setData({
            likeIf: true
          })
        }).catch(() => {
          console.log('cancel')
        });
      }
    }
  }
})