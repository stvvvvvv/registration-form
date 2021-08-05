<template>
  <div class="form__container">
    <form @submit.prevent="regUser" class="form" novalidate>
      <!--First step-->
      <transition name="fade">
        <div class="form__step" v-show="step === 0">
          <h2 class="form__title">Enter your email</h2>
          <p class="form__note">
            We will send you an email with a link to confirm your email
          </p>
          <input
            class="form__input"
            v-model="userInfo.email"
            @blur="v$.userInfo.email.$touch"
            type="text"
            name="email"
            id="email"
            placeholder="Your email"
          />
          <transition
          name="custom-classes-transition"
          enter-active-class="animated tada"
          leave-active-class="animated bounceOut"
          >
            <span
            class="form__error form__error-email"
            v-if="v$.userInfo.email.$error"
            >
              Enter correct email
            </span>
          </transition>
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
          <transition
          name="btn-fade"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          >
            <button
              v-if="v$.userInfo.email.$invalid === false"
              class="form__btn first-step-btn"
              type="button"
              @click="nextStep()"
            >
              Send email
            </button>
          </transition>
        </div>
      </transition>
      <!--/First step-->
      <!-- ============================================= -->
      <!--Second step-->
      <transition name="fade">
        <div class="form__step" v-show="step === 1">
          <h2 class="form__title">Create an account</h2>
          <label for="login">Login</label>
          <input
            class="form__input"
            v-model="userInfo.login"
            @blur="v$.userInfo.login.$touch"
            type="text"
            name="login"
            id="login"
            placeholder="Your login"
          />
          <transition
          name="custom-classes-transition"
          enter-active-class="animated tada"
          leave-active-class="animated bounceOut"
          >
            <span
            class="form__error form__error-login"
            v-if="v$.userInfo.login.$error"
            >
              Minimum login length 8 characters
            </span>
          </transition>
          <label for="pass">Password</label>
          <input
            class="form__input"
            v-model="userInfo.pass"
            @blur="v$.userInfo.pass.$touch"
            type="password"
            name="pass"
            id="pass"
            placeholder="Your password"
          />
          <transition
          name="custom-classes-transition"
          enter-active-class="animated tada"
          leave-active-class="animated bounceOut"
          >
            <span
            class="form__error form__error-pass"
            v-if="v$.userInfo.pass.$error"
            >
              Minimum password length 8 characters
            </span>
          </transition>
          <input
            class="form__input"
            v-model="userInfo.passConfirm"
            @blur="v$.userInfo.passConfirm.$touch"
            type="password"
            name="passComfirm"
            id="passConfirm"
            placeholder="Confirm password"
          />
          <p class="form__note">
            Login and password must be at least eight characters long
          </p>
          <transition
          name="custom-classes-transition"
          enter-active-class="animated tada"
          leave-active-class="animated bounceOut"
          >
            <span
            class="form__error form__error-pass-confirm"
            v-if="v$.userInfo.passConfirm.$error"
            >
              Enter same password
            </span>
          </transition>
          <transition
          name="btn-fade"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          >
            <button
              v-if="v$.userInfo.login.$invalid === false && v$.userInfo.pass.$invalid === false && v$.userInfo.passConfirm.$invalid === false"
              class="form__btn second-step-btn"
              type="button"
              @click="nextStep()"
            >
              Next
            </button>
          </transition>
          <button
            class="form__btn mt-5"
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
          <h2 class="form__title">Personal information</h2>
          <label for="name">Name</label>
          <input
            class="form__input"
            v-model="userInfo.name"
            @blur="v$.userInfo.name.$touch"
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
          />
          <label for="surname">Surname</label>
          <input
            class="form__input"
            v-model="userInfo.surname"
            type="text"
            name="surname"
            id="surname"
            placeholder="Your surname"
          />
          <label for="number">Number</label>
          <input
            class="form__input"
            v-model="userInfo.number"
            type="text"
            name="number"
            id="number"
            placeholder="+7 (999) 999 99 99"
          />
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
      <!-- ============================================== -->
      <!-- Fourth step -->
      <transition name="fade">
        <div class="form__step" v-show="step === 3">
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
            type="submit"
            @click="nextStep()"
          >
            Submit
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
      </transition>      <transition name="fade">
        <div class="form__step" v-show="step === 4">
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
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'
// import { reactive, computed } from 'vue'

export default {
  name: 'Form',
  setup () {
    return { v$: useVuelidate() }
  },
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
      activeSaas: false,
      mail: '',
      userInfo: {
        email: '',
        name: '',
        surname: '',
        number: '',
        login: '',
        pass: '',
        comfirmPass: ''
      }
    }
  },
  validations () {
    return {
      mail: { required, email },
      userInfo: {
        email: { required, email },
        login: { required, minLength: minLength(8) },
        pass: { required, minLength: minLength(8) },
        passConfirm: { required, sameAs: sameAs(this.userInfo.pass) },
        name: { required, minLength: minLength(1) }
      }
    }
  },
  methods: {
    nextStep () {
      this.step++
    },
    prevStep () {
      this.step--
    },
    regUser () {
      console.log(this.v$)
      console.log('Registration Successful')
      console.log(this.userInfo)
    }
  }
}
</script>
