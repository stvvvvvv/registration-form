<template>
  <div class="form__container">
      <form action="" class="form">
        <!--First step-->
        <transition name="fade">
          <div
          class="form__step"
          v-show="step === 0"
          >
             <h2 class="form__title">Enter your email</h2>
             <p class="form__note">We will send you an email with a link to confirm your email</p>
             <input class="form__input" type="text" name="email" id="email" placeholder="Your email">
             <div class="input__container">
               <label class="form__label" for="cbx">
                  <input class="form__checkbox" type="checkbox" name="cbx" id="cbx">
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
          <div
          class="form__step"
          v-show="step === 1"
          >
            <h1>Second step</h1>
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
            style="border: none;"
            >
              Back
            </button>
          </div>
          </transition>
          <!--/Second step-->
    <!-- ============================================== -->
          <!--Thrid step-->
          <transition name="fade">
          <div
          class="form__step"
          v-show="step === 2"
          >
            <h1>Third step</h1>
            <button
            class="form__btn"
            type="button"
            @click="prevStep()"
            style="border: none;"
            >
              Back
            </button>
          </div>
          </transition>
          <!--/Thrid step-->
      </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      step: 0
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
