<template>
  <li class="article-item" :class="{has_img: !!itemData.img}">
    <div class="article-item_img_container">
      <img class="article-item_img" v-if="itemData.img" :src="itemData.img" alt="">
    </div>
    <h3 class="article_title">
      <router-link :to="{name: 'article', query: {Id: itemData._id}}">
        {{itemData.title}}
      </router-link>
    </h3>
    <p class="article_desc">{{itemData.description}}</p>
    <div class="article_info">
      <span class="article_time">{{itemData.created_date | day | date_format()}}</span>
      <div class="tag_list">
        <router-link class="tag" v-for="item in itemData.tags"
                     :to="{name: 'tag', query: {Id: item._id}}"
                     :key="item._id">
          {{item.name}}
        </router-link>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'ArticleItem',
    props: {
      itemData: {
        type: Object
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../styles/mixin";

  .article-item {
    margin-top: 20px;
    background-color: $white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 20px 0 #ddd;

    &.has_img {
      .article-item_img_container {
        position: relative;
        width: 100%;
        height: 150px;
        overflow: hidden;
      }
    }

    &_img {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
    }

    .article_title {
      line-height: 2;
    }

    .article_desc {
      padding: 15px 0;
      line-height: 1.5;
    }

    .article_info {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .article_time {
        color: $gray-999;
      }

      .tag_list {
        margin-left: 20px;
      }
    }
  }
</style>
