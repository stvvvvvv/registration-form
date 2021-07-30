<template>
  <div class="form__container">
      <form action="" class="form">
          <div v-show="step === 0" class="form__step">
            <h2 class="form__title">Enter your email</h2>
            <p class="form__note">We will send you an email with a link to confirm your email</p>
            <input class="form__input" type="text" name="email" id="email" placeholder="Your email">
            <div class="input__container">
              <label class="form__label" for="cbx">
                <input class="form__checkbox" type="checkbox" name="cbx" id="cbx">
                <span class="form__span"> Send me the latest news</span>
              </label>
            </div>
            <button type="button" class="form__btn"> Send email </button>
          </div>
          <div class="form__step">
            <h1>Second step</h1>
          </div>
          <div class="form__step">
            <h1>Third step</h1>
          </div>
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
  }
}
</script>
