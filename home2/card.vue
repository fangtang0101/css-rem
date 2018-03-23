/** * list.vue * 登录 * Created by zhuyi on 17/7/21. */
<template>
  <div class="card">
    <ul>
      <!-- {{freightItem}}555 -->
      <li class="li-icon">
        <i class="icon-from icon"></i>
        <span class="address">{{freightItem.loadingProvinceName}}   {{freightItem.loadingCityName}}</span>
      </li>
      <li class="li-icon">
        <i class="icon-to icon"></i>
        <span class="address">{{freightItem.unloadingProvinceName}}   {{freightItem.unloadingCityName}}</span>
      </li>
      <li>
        <span class="name-product span-vertical">{{freightItem.goodsName}}</span>
      </li>
      <li>
        <span class="date-pre span-vertical">接货截止时间：</span>
        <span class="date-val span-vertical">{{freightItem.freightEndTime}}</span>
      </li>
      <li class="li-icon">
        <span>
          <el-radio-group v-model="radioPrice" size="mini">
            <el-radio-button label="单价"></el-radio-button>
            <el-radio-button label="含税"></el-radio-button>
          </el-radio-group>
        </span>
        <span v-show="price" class="price">&yen; {{price}}</span>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
import { login } from '../../api/LoginService';
export default {
  name: 'home',
  props: {
    freightItem: Object
  },
  data() {
    return {
      info: {},
      radioPrice: '单价',
    };
  },
  computed: {
    price() {
      if (this.radioPrice == '单价') {
        return this.freightItem.goodsPrice;
      } else if (this.radioPrice == '含税') {
        return this.freightItem.quotePrice;
      } else {
        return '';
      }
    },
  },
  methods: {
    clickMenu(index) {
      this.index = index;
      if (3 == index) {
        window.location.href = '/login/login.html';
      } else if (1 == index || 2 == index || 4 == index) {
        this.showMask = true;
      }
    },
    close() {
      this.showMask = false;
      this.index = 10;
    }
  },
  created() {}
};

</script>
<style lang="scss" rel="stylesheet/scss">
@import "../assets/sass/base";

 // 媒体查询  1912
 @media only screen and (min-width: 1700px) {  // 大于 1366 便执行
  .card {
       width: 18% !important;
       margin-right: 1% !important;
       margin-bottom: 1% !important;;
  }
}

$color-main: #1995d8;
.span-vertical {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.card {
  width: 23%;
  margin-right: 2%;
  margin-bottom: 2%; // border: 1px solid #1995d8;
  border-style: solid;
  border-width: 2px 1px 1px;
  border-color: #1995d8 transparent transparent;
  background-color: #fff;
  box-shadow: 0 0 2px 3px #ccc;
  color: #000;
  &:hover {
    border-color: #1995d8;
  }
  ul {
    height: 100%;
    li {
      height: 50px;
      border-bottom: 1px solid #eaeaea;
      padding-left: 10px;
      &:first-child {
        border-bottom: 0px;
      }
      span {
        display: inline-block;
      }
      &:first-child {}
      .icon {
        display: inline-block;
        vertical-align: middle;
        width: 20px;
        height: 28px;
      }
      .icon-from {
        background: url(../login/img/i_01.png) no-repeat center 0;
      }
      .icon-to {
        background: url(../login/img/i_02.png) no-repeat center 0;
      }
      .address {
        display: inline-block;
      }
    }
    .li-icon {
      height: auto;
      padding-top: 11px;
      padding-bottom: 11px;
      line-height: 28px;
      span {
        &:last-child {
          padding-left: 10px;
        }
        vertical-align: middle;
      }
      .price {
        color: #f1373b;
        font-size: 18px;
        margin-left: 10px;
      }
      // ele radio 的颜色改变
      .el-radio-button__orig-radio:checked+.el-radio-button__inner {
        background-color: $color-main;
        border-color: $color-main;
        box-shadow: -1px 0 0 0 $color-main;
      }
    }
  }
}

</style>
