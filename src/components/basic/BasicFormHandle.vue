<template>
  <div class="page flexColumnBetween">
      <vue-topbar v-bind:title="title" back="true"></vue-topbar>
      <div class="mainContent">
        <form id="myForm" method="post" @submit.prevent name="myForm">
          <section>
            <h3>输入组件</h3>
            <label>
              <span>姓名</span><input id="name" name="name" type="text" v-model="user.name" placeholder="请输入姓名" />
            </label>
            <label>
              <span>电话</span><input id="telephone" name="telephone" type="telephone" v-model.number="user.telephone" placeholder="请输入电话" />
            </label>
            <label>
              <span>邮箱</span><input id="email" name="email" type="email" v-model="user.email" placeholder="请输入邮箱" />
            </label>
            <label>
              <span>网址</span><input id="url" name="url" type="url" v-model="user.url" placeholder="请输入网址" />
            </label>
            <label>
              <span>年龄</span><input id="age" name="age" type="number" v-model.number="user.age" placeholder="请输入年龄" />
            </label>
            <label>
              <span>分数</span><input id="score" name="score" type="range" v-model="user.score" placeholder="请输入分数（1-100）" min="0" max="100" />
            </label>
            <label>
              <span>生日日期</span><input id="birthday" name="birthday" type="date" v-model="user.birthday" />
            </label>
            <label>
              <span>日期时间</span><input id="datetime" name="datetime" type="datetime-local" v-model="user.datetime" />
            </label>
            <label>
              <span>月份</span><input id="month" name="month" type="month" v-model="user.month" />
            </label>
            <label>
              <span>星期</span><input id="week" name="week" type="week" v-model="user.week" />
            </label>
            <label>
              <span>时间</span><input id="time" name="time" type="time" v-model="user.time" />
            </label>
            <label>
              <span>颜色</span><input id="color" name="color" type="color" v-model="user.color" />
            </label>
            <label class="commentLine">
              <span>评论</span><textarea id="comment" name="comment" rows="2" v-model.trim="user.comment" placeholder="请输入评论"></textarea>
            </label>
          </section>

          <section>
            <h3>下拉组件</h3>
            <select v-model="jsFrame1">
              <option v-for="jsFramework in jsFrameworks" v-bind:value="jsFramework.id">
                {{ jsFramework.title }}
              </option>
            </select>
            <select v-model="jsFrame2">
              <option v-for="jsFramework in jsFrameworks" v-bind:value="jsFramework">
                {{ jsFramework.title }}
              </option>
            </select>
            <select v-model="jsFrame3" multiple>
              <option v-for="jsFramework in jsFrameworks" v-bind:value="jsFramework">
                {{ jsFramework.title }}
              </option>
            </select>
            <p>第一个下拉框已选择：{{ jsFrame1 }}</p>
            <p>第二个下拉框已选择：{{ jsFrame2 }}</p>
            <p>第三个下拉框已选择：{{ jsFrame3 }}</p>
          </section>

          <section class="whiteBg">
            <h3>复选组件</h3>
            <ul class="inlineLi">
                <li v-for="item in jsFrameworks">
                  <input type="checkbox" :name="item.title" :id="item.title" :value="item.title" v-model="jsFrame4">
                  <label class="checkboxLabel">{{ item.title }}</label>
                </li>
            </ul>
            <ul class="inlineLi">
                <li v-for="item in jsFrameworks">
                  <input type="checkbox" :name="item.title" :id="item.title" :value="item" v-model="jsFrame5">
                  <label class="checkboxLabel">{{ item.title }}</label>
                </li>
            </ul>
            <ul class="inlineLi">
                <li>
                  <input type="checkbox" v-bind:true-value="selected" v-bind:false-value="unSelected" v-model="jsFrame6">
                  <label class="checkboxLabel">是否同意协议</label>
                </li>
            </ul>
            <p>第一组复选框组件已选择：{{ jsFrame4 }}</p>
            <p>第二组复选框组件已选择：{{ jsFrame5 }}</p>
            <p>第三个复选框组件：{{ jsFrame6 }}</p>
          </section>

          <section class="whiteBg">
            <h3>单选组件</h3>
            <ul class="inlineLi">
                <li v-for="item in jsFrameworks">
                  <input type="radio" :name="item.title" :id="item.title" :value="item.title" v-model="jsFrame7">
                  <label class="checkboxLabel">{{ item.title }}</label>
                </li>
            </ul>
            <ul class="inlineLi">
                <li v-for="item in jsFrameworks">
                  <input type="radio" :name="item.title" :id="item.title" :value="item" v-model="jsFrame8">
                  <label class="checkboxLabel">{{ item.title }}</label>
                </li>
            </ul>
            <p>第一组单选框组件已选择：{{ jsFrame7 }}</p>
            <p>第二组单选框组件已选择：{{ jsFrame8 }}</p>
          </section>

          <section class="whiteBg">
            <h3>下拉列表联动(使用watch)</h3>
            <select v-model="province" class="zoneSelect">
              <option v-for="province in zone.provinces" v-bind:value="province">
                {{ province.name }}
              </option>
            </select>
            <select v-model="city" class="zoneSelect">
              <option v-for="city in zone.cities" v-bind:value="city">
                {{ city.name }}
              </option>
            </select>
            <select v-model="district" class="zoneSelect">
              <option v-for="district in zone.districts" v-bind:value="district">
                {{ district.name }}
              </option>
            </select>
            <p>已选择区域：{{ address }}</p>
          </section>

          <section class="whiteBg">
            <h3>下拉列表联动(使用v-on:change)</h3>
            <select v-model="province2" class="zoneSelect" v-on:change="changeProvince(province2)">
              <option v-for="province in zone2.provinces" v-bind:value="province">
                {{ province.name }}
              </option>
            </select>
            <select v-model="city2" class="zoneSelect" v-on:change="changeCity(city2)">
              <option v-for="city in zone2.cities" v-bind:value="city">
                {{ city.name }}
              </option>
            </select>
            <select v-model="district2" class="zoneSelect" v-on:change="changeDistrict(district2)">
              <option v-for="district in zone2.districts" v-bind:value="district">
                {{ district.name }}
              </option>
            </select>
            <p>已选择区域：{{ address2 }}</p>
          </section>

          <section class="whiteBg">
            <h3>单个图片上传预览</h3>
            <div class="padding">
              <input type="file" v-on:change="fileChange($event)" />
              <img class="previewImg" :src="myImgPreview" v-if="myImgPreview" />
            </div>
          </section>
          <section class="whiteBg">
            <h3>多个图片上传预览</h3>
            <div class="padding">
              <input type="file" v-on:change="fileChanges($event, myImgLimit)" multiple />
              <img class="previewImg" v-for="item in myImgs" :src="item" />
            </div>
          </section>
          <section class="whiteBg">
            <h3>单个图片上传预览(压缩)</h3>
            <div class="padding">
              <input type="file" v-on:change="fileChangeCompress($event)" />
              <div v-show="myOriginImg">
                原图片：<img class="previewImg" :src="myOriginImg" />
              </div>
              <div v-if="myCompressImg">
                压缩后：<img class="previewImg" :src="myCompressImg" />
              </div>
            </div>
          </section>
          <section class="whiteBg">
            <h3>多个图片上传预览(压缩)</h3>
            <div class="padding">
              <input type="file" v-on:change="filesChangeCompress($event, myImgLimit)" multiple />
              <img class="previewImg" v-for="item in myCompressImgs" :src="item" />
            </div>
          </section>
          <section>
            <pre>{{ user }}</pre>
          </section>

          <section class="centerSection">
            <button class="button" @click="submitMyForm($event)">普通按钮提交表单</button>
            <input class="submitBtn" type="submit" @click="submitMyForm" value="提交" />
          </section>
        </form>
      </div>
  </div>
</template>

<script>
import VueTopbar from '../VueTopbar'
import axios from 'axios'

export default {
  name: 'BasicFormHandle',
  data () {
    return {
      title: 'VueJS实例教程-Vue基础-表单操作',
      msg: 'Hello, VueJS!',
      jsFrameworks: [
        {id: 1, title: 'AngularJS'},
        {id: 2, title: 'ReactJS'},
        {id: 3, title: 'VueJS'}
      ],
      user: {
        name: null,
        telephone: null,
        email: null,
        url: null,
        age: null,
        score: null,
        birthday: null,
        datetime: null,
        month: null,
        week: null,
        time: null,
        color: '#dd3333',
        comment: null
      },
      jsFrame1: 3,
      jsFrame2: null,
      jsFrame3: [],
      jsFrame4: [],
      jsFrame5: [],
      jsFrame6: null,
      jsFrame7: null,
      jsFrame8: null,
      selected: '已选中',
      unSelected: '未选中',
      zone: {
        provinces: [],
        cities: [],
        districts: []
      },
      province: null,
      city: null,
      district: null,
      zone2: {
        provinces: [],
        cities: [],
        districts: []
      },
      province2: null,
      city2: null,
      district2: null,
      address: null,
      address2: null,
      myImg1: null,
      myImgPreview: null,
      myImgs: [],
      myImgLimit: 4,
      myOriginImg: null,
      myCompressImg: null,
      myCompressImgs: []
    }
  },
  mounted () {
    let that = this
    this.jsFrame2 = this.jsFrameworks[1]
    axios.get('http://localhost:9999/data/zone.json')
      .then(function (res) {
        console.log(res)
        if (res.data && res.data.length) {
          // 第一种联动（使用watch）
          that.zone.provinces = res.data
          that.province = that.zone.provinces[0]
          that.zone.cities = that.province.city
          that.city = that.zone.cities[0]
          that.zone.districts = that.city.area
          that.district = that.zone.districts[0]
          that.address = that.getAddress(that.province.name, that.city.name, that.district.name)
          // 第二种联动（使用v-on:change）
          that.zone2.provinces = res.data
          that.province2 = that.zone2.provinces[0]
          that.zone2.cities = that.province.city
          that.city2 = that.zone2.cities[0]
          that.zone2.districts = that.city2.area
          that.district2 = that.zone2.districts[0]
          that.address2 = that.getAddress(that.province.name, that.city2.name, that.district2.name)
        }
      })
      .then(function (error) {
        console.log(error)
      })
  },
  watch: {
    province (newProvince) {
      this.zone.cities = newProvince.city
      this.city = this.zone.cities[0]
      this.zone.districts = this.city.area
      this.district = this.zone.districts[0]
      this.address = this.getAddress(this.province.name, this.city.name, this.district.name)
    },
    city (newCity) {
      this.zone.districts = newCity.area
      this.district = this.zone.districts[0]
      this.address = this.getAddress(this.province.name, this.city.name, this.district.name)
    },
    district (newDistrict) {
      this.address = this.getAddress(this.province.name, this.city.name, newDistrict.name)
    }
  },
  components: {
    VueTopbar
  },
  methods: {
    submitMyForm (event) {
      console.log(this.user)
    },
    getAddress (province, city, district) {
      return province + ' ' + city + ' ' + district
    },
    changeProvince (province) {
      this.zone2.cities = province.city
      this.city2 = this.zone2.cities[0]
      this.zone2.districts = this.city2.area
      this.district2 = this.zone2.districts[0]
      this.address2 = this.getAddress(this.province2.name, this.city2.name, this.district2.name)
    },
    changeCity (city) {
      this.zone2.districts = this.city2.area
      this.district2 = this.zone2.districts[0]
      this.address2 = this.getAddress(this.province2.name, this.city2.name, this.district2.name)
    },
    changeDistrict (district) {
      this.district2 = district
      this.address2 = this.getAddress(this.province2.name, this.city2.name, this.district2.name)
    },
    fileChange (event) {
      let that = this
      console.log(event)
      if (event.target.files && event.target.files[0]) {
        let file = event.target.files[0]
        if (file.type.match('image')) {
          let reader = new FileReader()
          reader.onload = function (loadEvent) {
            that.myImgPreview = loadEvent.target.result
          }
          reader.readAsDataURL(file)
        }
      }
    },
    fileChanges (event, myImgLimit) {
      let that = this
      console.log(event)
      if (event.target.files && event.target.files[0]) {
        let files = event.target.files
        if (files.length <= myImgLimit) {
          for (let i = 0, l = files.length; i < l; i++) {
            let file = files[i]
            if (!file.type.match('image')) continue
            let reader = new FileReader()
            reader.onload = function (loadEvent) {
              that.myImgs.push(loadEvent.target.result)
            }
            reader.readAsDataURL(file)
          }
        } else {
          that.myImgs = []
          alert('上传图片不能超过' + myImgLimit + '张')
        }
      }
    },
    // 图片压缩
    // 参数：
    // 1：file: 文件上传控件获取到的单个文件. this.files[0]
    // 2: callback：回调函数
    // 3：width：压缩的临界最大尺寸宽度，不传默认为1000
    // 4：height：压缩的临界最大尺寸宽度，不传默认为1000
    // 5：rate：压缩（率）质量, 0-1之间，不传默认为0.8
    getDataUri (file, callback, width, height, rate) {
      let reader = new FileReader()
      reader.onload = function (e) {
        let maxWidth, maxHeight, compressRate
        let image = new Image()
        if (width && typeof (width) === 'number') {
          maxWidth = width
        } else {
          maxWidth = 1000
        }
        if (height && typeof (height) === 'number') {
          maxWidth = height
        } else {
          maxHeight = 1000
        }
        if (rate && typeof (rate) === 'number') {
          compressRate = rate
        } else {
          compressRate = 0.8
        }
        image.src = e.target.result
        image.onload = function () {
          let canvas = document.createElement('canvas')
          let width = this.width
          let height = this.height
          if (width > height) {
            if (width > maxWidth) {
              height = Math.round(height *= maxWidth / width)
              width = maxWidth
            }
          } else {
            if (height > maxHeight) {
              width = Math.round(width *= maxHeight / height)
              height = maxHeight
            }
          }
          canvas.width = width
          canvas.height = height
          canvas.getContext('2d').fillStyle = '#ffffff'
          canvas.getContext('2d').fillRect(0, 0, width, height)
          canvas.getContext('2d').drawImage(this, 0, 0, width, height)
          // callback(canvas.toDataURL('image/jpeg').replace(/^data:image\/(png|jpg|jpeg);base64,/, ''))
          callback(canvas.toDataURL('image/jpeg', compressRate))
        }
      }
      reader.readAsDataURL(file)
    },
    fileChangeCompress (event) {
      let that = this
      console.log(event)
      if (event.target.files && event.target.files[0]) {
        let file = event.target.files[0]
        if (file.type.match('image')) {
          let reader = new FileReader()
          reader.onload = function (loadEvent) {
            // 原图片
            that.myOriginImg = loadEvent.target.result
            // console.log(that.myOriginImg)
          }
          reader.readAsDataURL(file)

          // 压缩图片
          that.getDataUri(file, (data) => {
            that.myCompressImg = data
          }, 300, 300, 0.5)
        }
      }
    },
    filesChangeCompress (event, myImgLimit) {
      let that = this
      console.log(event)
      if (event.target.files && event.target.files[0]) {
        let files = event.target.files
        if (files.length <= myImgLimit) {
          for (let i = 0, l = files.length; i < l; i++) {
            let file = files[i]
            if (!file.type.match('image')) continue
            // 压缩图片
            that.getDataUri(file, (data) => {
              that.myCompressImgs.push(data)
            }, 300, 300, 0.5)
          }
        } else {
          that.myCompressImgs = []
          alert('上传图片不能超过' + myImgLimit + '张')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../css/vars.scss';
  .mainContent{
    section{
      padding: 1rem 0;
      border-bottom: 1px solid $borderColor;
      h3{margin-bottom: .5rem; padding: 0 1rem;}
      p{margin-top: .5rem; padding: 0 1rem;}
      label{display: flex; flex-direction: row; justify-content: space-between; align-items: center; padding: .5rem 1rem; border-bottom: 1px solid $borderColor; background-color: $lightColor; height: 2.5rem; line-height: 2.5rem; }
      .commentLine{height: 5rem;}
      label span{display: block; width: 7rem;}
      input{width: 100%; border: none; height: 100%;}
      textarea{width: 100%; display: block; border-color: #eee;}
      .button{padding: .5rem 1rem; display: inline-block; margin: 0 auto;}
      select{margin: 0 1rem; display: block; width: calc( 100% - 2rem ); }
      input[type=checkbox], input[type=radio]{display: inline; width: 3rem; height: 1rem;}
      .checkboxLabel{display: inline-block; background: none; border: none;}
    }
    .whiteBg{background-color: $lightColor;}
    .centerSection{text-align: center; width: 100%;}
    h2{padding: .5rem 0;text-align: center;}
    .inlineLi{
      li{display: inline-block; }
    }
    .zoneSelect{display: inline-block; width: 28%; margin-right: 0;}
    .previewImg{width: 60px; height: 60px; margin-top: 1rem; margin-right: 1rem;}
    .padding{padding: 1rem;}
    .submitBtn{width: 30%; padding: 0.7rem 1rem; background-color: #0a8acd; color: #ffffff; display: inline-block; }
  }
</style>
