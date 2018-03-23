/** * list.vue * 登录 * Created by zhuyi on 17/7/21. */
<template>
  <div class="home">
    <div class="main">
      <header class="header">
        <div class="logo">
        </div>
        <div class="menu">
          <ul>
            <li v-bind:class="{ selected: index == 1 }" @click="clickMenu(1)">关于我们</li>
            <li v-bind:class="{ selected: index == 2 }" @click="clickMenu(2)">企业文化</li>
            <li v-bind:class="{ selected: index == 3 }" @click="clickMenu(4)">货源</li>
            <li v-bind:class="{ selected: index == 3 }" @click="clickMenu(3)">登录</li>
          </ul>
        </div>
      </header>
      <footer class="footer">
        <p class="copyright">
          &copy; Copyright 连云港港口控股集团有限公司 苏ICP备07020600号
        </p>
      </footer>
    </div>
    <div class="mask" v-if="showMask">
    </div>
    <div class="pop" v-if="showMask">
      <i class="colse" @click="close"></i>
      <div class="text-page">
        <template v-if="1 == index || 2 == index">
          <h1>{{listPop[index-1].title}}</h1>
          <p v-for="item in listPop[index-1].list" v-bind:class="{ retract: listPop[index-1].retract}">{{item}}</p>
        </template>
      </div>
      <template v-if="4 == index">
        <div class="card-container">
          <card class="card-item" v-for="item in listData" :freightItem="item"></card>
        </div>
        <v-page class="page" :page="page" :pageSize="pageSize" :total="total" v-on:change="change"></v-page>
      </template>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { login, list } from '../../api/LoginService';
import card from './card.vue';
import page from '../components/ele-list/elePage.vue';

export default {
  name: 'home',
  components: {
    'card': card,
    'v-page': page
  },
  data() {
    return {
      total: 0,
      page: 1,
      pageSize: 10,
      loading: false,
      listData: [],
      showMask: false,
      index: 10,
      listPop: [{
        "title": "关于我们",
        "retract": true,
        "list": [
          "连云港港公路港，位于上合组织（连云港）国际物流园区内，紧邻东疏港高速公路，总占地面积102万平方米，分三期建设，整个园区实行封闭式管理。目前揭牌启用的是一期项目，建设投资4亿元，已完成停车场建设面积15万平方米，可用大型车位1100个，现可提供管理服务、信息交易、车辆调度、仓储、配套服务5个功能模块的服务。连云港公路港在为港口整体功能服务的同时，重点致力于融合物流服务、物流需求、物流载体三大资源，为众多物流企业提供信息交易、商务配套和物业等系统服务",

          "连合智运为连云港港公路港物流综合服务平台",
        ]
      }, {
        "title": "企业文化",
        "retract": false,
        "list": [
          "因团队协作而强大",
          "因精细管理而专业",
          "因信守承诺而享誉",
          "因客户满意而自豪"
        ]
      }],
    };
  },
  methods: {
    change(newPage,newPageSize) {
      this.pageSize = newPageSize;
      this.page = newPage;
      this.query();
    },
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
    },
    query() {
      let searchParams = { "size": this.pageSize, "page": this.page };
      const self = this;
      this.total = 0;
      this.loading = true;
      self.listData = [];
      list(searchParams, (success, error) => {
        if (error) {
          this.$message({
            type: 'error',
            message: error.content,
            duration: 5000
          });
        }
        if (success) {
          this.total = success.total;
          self.listData = success.content;
          this.loading = false;
          console.log('parent.listData', self.listData);
        }
      });
    }

  },
  created() {

    this.query();

  }

};

</script>
<style lang="sass" rel="stylesheet/scss">
@import "../assets/sass/base";
@import "home";

</style>
