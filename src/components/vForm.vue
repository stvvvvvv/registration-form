<template>
  <div class="form__container">
    <form action="" class="form">
      <!--First step-->
      <transition name="fade">
        <div class="form__step" v-show="step === 0">
          <h2 class="form__title">Enter your email</h2>
          <p class="form__note">
            We will send you an email with a link to confirm your email
          </p>
          <input
            class="form__input"
            type="text"
            name="email"
            id="email"
            placeholder="Your email"
          />
          <div class="input__container">
            <label class="form__label" for="cbx">
              <input
                class="form__checkbox"
                type="checkbox"
                name="cbx"
                id="cbx"
              />
              <span class="form__span"> Send me the latest news</span>
            </label>
          </div>
          <button
            class="form__btn"
            type="button"
            @click="nextStep()"
          >
            Send email
          </button>
        </div>
      </transition>
      <!--/First step-->
      <!-- ============================================= -->
      <!--Second step-->
      <transition name="fade">
        <div class="form__step" v-show="step === 1">
          <h2 class="form__title">Create an account</h2>
          <label for="pass">Login</label>
          <input
            class="form__input"
            type="text"
            name="login"
            id="login"
            placeholder="Your login"
          />
          <label for="pass">Password</label>
          <input
            class="form__input"
            type="password"
            name="pass"
            id="pass"
            placeholder="Your password"
          />
          <input
            class="form__input"
            type="password"
            name="passComfirm"
            id="passConfirm"
            placeholder="Confirm password"
          />
          <p class="form__note">
            Password must be at least eight characters long and include letters,
            numbers and special characters
          </p>
          <button
            class="form__btn"
            type="button"
            @click="nextStep()"
          >
            Next
          </button>
          <button
            class="form__btn"
            type="button"
            @click="prevStep()"
            style="border: none"
          >
            Back
          </button>
        </div>
      </transition>
      <!--/Second step-->
      <!-- ============================================== -->
      <!--Thrid step-->
      <transition name="fade">
        <div class="form__step" v-show="step === 2">
          <h2 class="form__title">Your interests</h2>
          <p class="form__note">
            Select a few options so that we understand you better
          </p>
          <div class="form__cbx-container">
            <label class="form__cbx-label" @click="activeReact = !activeReact" :class="{ active: activeReact }"  for="react">React.js</label>
            <input
              class="form__cbx-mass"
              type="checkbox"
              name="react"
              id="react"
            />
            <label  class="form__cbx-label" @click="activeVue = !activeVue" :class="{ active: activeVue }"  for="vue">Vue.js</label>
            <input
              class="form__cbx-mass"
              type="checkbox"
              name="vue"
              id="vue"
            />
            <label  class="form__cbx-label" @click="activeAngular = !activeAngular" :class="{ active: activeAngular }"  for="angular">Angular</label>
            <input
              class="form__cbx-mass"
              type="checkbox"
              name="angular"
              id="angular"
            />
            <label  class="form__cbx-label" @click="activeNode = !activeNode" :class="{ active: activeNode }"  for="node">Node.js</label>
            <input
              class="form__cbx-mass"
              type="checkbox"
              name="node"
              id="node"
            />
            <label class="form__cbx-label" @click="activeJs = !activeJs" :class="{ active: activeJs }"  for="js">JavaScript</label>
            <input
              class="form__cbx-mass"
              type="checkbox"
              name="js"
              id="js"
            />
            <label class="form__cbx-label" @click="activePhp = !activePhp" :class="{ active: activePhp }" for="php">PHP</label>
            <input
              class="form__cbx-mass"
              type="checkbox"
              name="php"
              id="php"
            />
            <label class="form__cbx-label" @click="activePyton = !activePyton" :class="{ active: activePyton }"  for="pyton">Pyton</label>
            <input
              class="form__cbx-mass"
              type="checkbox"
              name="pyton"
              id="pyton"
            />
            <label class="form__cbx-label" @click="activeHtml = !activeHtml" :class="{ active: activeHtml }"  for="html">HTML</label>
            <input
              class="form__cbx-mass"
              type="checkbox"
              name="html"
              id="html"
            />
            <label class="form__cbx-label" @click="activePug = !activePug" :class="{ active: activePug }"  for="pug">Pug</label>
            <input
              class="form__cbx-mass"
              type="checkbox"
              name="pug"
              id="pug"
            />
            <label class="form__cbx-label" @click="activeCss = !activeCss" :class="{ active: activeCss }"  for="css">CSS</label>
            <input
              class="form__cbx-mass"
              type="checkbox"
              name="css"
              id="css"
            />
            <label class="form__cbx-label" @click="activeScss = !activeScss" :class="{ active: activeScss }"  for="scss">SCSS</label>
            <input
              class="form__cbx-mass"
              type="checkbox"
              name="scss"
              id="scss"
            />
            <label class="form__cbx-label" @click="activeLess = !activeLess" :class="{ active: activeLess }"  for="less">LESS</label>
            <input
              class="form__cbx-mass"
              type="checkbox"
              name="less"
              id="less"
            />
            <label class="form__cbx-label" @click="activeSaas = !activeSaas" :class="{ active: activeSaas }"  for="saas">SAAS</label>
            <input
              class="form__cbx-mass"
              type="checkbox"
              name="saas"
              id="saas"
            />
          </div>
          <button
            class="form__btn"
            type="button"
            @click="nextStep()"
          >
            Next
          </button>
          <button
            class="form__btn"
            type="button"
            @click="prevStep()"
            style="border: none"
          >
            Back
          </button>
        </div>
      </transition>
      <!--/Thrid step-->
      <!-- Fourth step -->
      <transition name="fade">
        <div class="form__step" v-show="step === 3">
          <h2 class="form__title">4 step</h2>
          <button
            class="form__btn"
            type="button"
            @click="prevStep()"
            style="border: none"
          >
            Back
          </button>
        </div>
      </transition>
      <!-- /Fourth step -->
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      step: 0,
      activeReact: false,
      activeVue: false,
      activeAngular: false,
      activeNode: false,
      activeJs: false,
      activePhp: false,
      activePyton: false,
      activeHtml: false,
      activePug: false,
      activeCss: false,
      activeScss: false,
      activeLess: false,
      activeSaas: false
    }
  },
  methods: {
    nextStep () {
      this.step++
    },
    prevStep () {
      this.step--
    }
  }
}
</script>
