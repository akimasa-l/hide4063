<template>
  <div>
    <div class="container">
      <div class="main">
        <div class="message">
          <typing :display="display" />
        </div>
        <div>
          <div class="text">
            <div
              class="textarea"
              role="textarea"
              ref="textarea"
              contenteditable="true"
            >{{ textarea }}</div>
          </div>
          <div class="buttons">
            <button
              type="button"
              v-clipboard:copy="textarea"
              class="button clip"
            >
              <font-awesome-icon :icon="['far', 'clipboard']" class="fa-icon" />
              クリップボードにコピーする
            </button>
            <button type="button" @click="update" class="button hide4063">
              生成する！
            </button>
            <a
              :href="tweet"
              class="button twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <font-awesome-icon
                :icon="['fab', 'twitter']"
                class="fa-icon"
              />Twitterでシェアする
            </a>
          </div>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>
<style lang="scss">
@function max($values...) {
  @return unquote('max(#{$values})');
}
.container {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    -45deg,
    hsl(14, 78%, 58%),
    hsl(337, 78%, 57%),
    hsl(196, 72%, 49%),
    hsl(166, 72%, 49%)
  );
  background-size: 400% 400%;
  animation: gradient 15s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
}


.main {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.message,
.text,
.buttons,
.button {
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}
button {
  cursor: pointer;
}
.fa-icon {
  margin: 5px;
}
.button {
  border-radius: 15px;
  margin: 10px;
  --button-font-size: max(14px, 1.5vmax);
  font-size: var(--button-font-size);
  padding: 10px;
}
.clip {
  background-color: hsla(0, 0%, 100%, 0);
  border: 2px solid hsla(0, 0%, 100%, 0.493);

  color: hsla(0, 0%, 90%, 0.8);
  box-shadow: none;

  transition-duration: 0.15s;
  transition-timing-function: linear;
  transition-property: color, background-color,
    box-shadow /* ←これいらなくね？ */;
  /* transition: 0.3s color ease-in-out, 0.3s color ease-in-out border,
    0.3s color ease-in-out background-color; */

  &:hover,
  &:active,
  &:focus {
    background-color: hsla(0, 0%, 100%, 0.842);
    color: hsla(0, 0%, 0%, 0.8);
  }
  &:active {
    box-shadow: 0 0 5px 3px white; //←これいらなくね2
  }
}
.hide4063 {
  background-image: url('~/assets/images/hide4063.jpg');
  background-color: hsla(0, 0%, 100%, 0);
  background-blend-mode: lighten;
  background-position: 50% 50%;
  background-size: cover;
  border: 1px solid hsla(0, 0%, 100%, 0.575);
  color: hsl(0, 0%, 100%);

  transition-duration: 0.15s;
  transition-timing-function: linear;
  transition-property: color, background-color, font-weight;
  &:hover,
  &:active,
  &:focus {
    background-color: hsla(0, 0%, 100%, 0.466);
    color: hsla(0, 0%, 0%, 1);
    font-weight: 700;
  }
  &:active {
    background-color: hsla(0, 0%, 100%, 0.959);
  }
}
.twitter {
  background-color: hsla(203, 89%, 53%, 1);
  border: none;
  color: hsla(0, 0%, 100%, 1);
  &,
  &:visited {
    text-decoration: none;
  }
  transition-duration: 0.15s;
  transition-timing-function: linear;
  transition-property: color, background-color;
  &:hover,
  &:active,
  &:focus {
    background-color: hsla(0, 0%, 100%, 1);
    color: hsla(203, 89%, 53%, 1);
  }
}
.textarea {
  display: flex;
  white-space: pre-wrap;
  justify-content: center;
  align-items: center;
  // width: max(40vmax, 250px);
  // height: max(20vmax, 250px);
  border-radius: 10px;
  border: 2px solid hsl(266, 76%, 54%);
  outline: none;
  resize: none;
  padding: 0.8vh 0.8vw;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  font-size: calc(var(--title-font-size) * 0.6);
  text-align: center;
}

.message {
  text-align: center;
  color: white;
  font-size: var(--title-font-size);
  padding: 10px;
  font-weight: 300;
}

@keyframes gradient {
  /* 
   * グラデーションのサンプル
   * https://codepen.io/P1N2O/pen/pyBNzX
   */
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
:root {
  --title-font-size: max(3.5vmax, 28px);
}
</style>
<script lang="js">
// 'vue-typed-js'がtypescriptに対応してないからjsにするしかないのくっそムカつく
// でもけっきょくthis.$refs.textarea;がjsでしかできなさそうだからjsにするしかないのもムカつく
import Vue from "vue";
import {
  display,
  create_textarea,
  create_message,
  create_hashtags,
  create_tweet
} from "~/assets/scripts/data";


export default Vue.extend({

  data() {
    return {
      display,
      message: create_message(),
      hashtags: create_hashtags()
    };
  },
  computed: {
    textarea() {
      return create_textarea(this.message, this.hashtags);
    },
    tweet() {
      return create_tweet(this.textarea);
    }
  },
  methods: {
    update() {
      this.message = create_message();
      this.hashtags = create_hashtags();
    }
  }
});
</script>
