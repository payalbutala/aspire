<template>
  <div class="q-pa-md card-slider">
    <q-btn
      class="row q-pr-none q-ml-auto card-slider__show-cta"
      icon="img:/icons/remove_eye.svg"
      :label="showDetails ? 'Hide card number' : 'Show  card number'"
      @click="toggleCardDetails"
    >
    </q-btn>
    <q-carousel
      v-model="activeCard"
      swipeable
      animated
      navigation
      padding
      height="275px"
      class="text-white"
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide
        :name="card.id"
        v-for="card in cardStore.cards"
        :key="card.id"
        :class="card.isFreeze ? 'freezed' : ''"
      >
        <div class="card-slider__item bg-positive rounded-borders">
          <q-icon
            name="img:/images/aspire-logo-white.svg"
            class="card-slider__logo"
          />
          <div class="card-slider__name">
            {{ card.name }}
          </div>
          <div class="card-slider__card-no">
            <span v-if="!showDetails">
              <label
                ><span></span><span></span><span></span><span></span
              ></label>
              <label
                ><span></span><span></span><span></span><span></span
              ></label>
              <label
                ><span></span><span></span><span></span><span></span
              ></label>
              <label>{{ cardNumber ? cardNumber[3] : '****' }}</label>
            </span>
            <span v-if="showDetails">
              <label v-for="number of cardNumber" :key="number">
                {{ number }}
              </label>
            </span>
          </div>
          <div class="row">
            <div class="card-slider__validity">
              <label>Thru:</label> {{ card.validityDate }}
            </div>
            <div class="card-slider__cvv">
              <label>CVV:</label>
              <span class="cvv-no" v-if="showDetails">{{
                card.cvvDetails
              }}</span>
              <span v-if="!showDetails">***</span>
            </div>
          </div>

          <q-icon name="img:/images/visa.svg" class="card-slider__type" />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { useCardStore } from 'src/stores/card';

let showDetails = ref(false);
const cardStore = useCardStore();
const activeCard = computed({
  get() {
    return cardStore.activeCard.id;
  },
  set(id) {
    cardStore.setActiveCard(id);
  },
});
const cardNumber = computed(() => {
  return cardStore.activeCard.cardNumber.toString().match(/.{1,4}/g);
});
const toggleCardDetails = () => {
  showDetails.value = !showDetails.value;
};
</script>
<style lang="scss" scoped>
.card-slider {
  font-family: $Open-sans-bold;
  color: $white;
  padding: 0;
  margin-bottom: 42px;

  @media (max-width: $mobile) {
    background: $downriver-blue;
    margin: 0;
    padding-bottom: 15px;
  }

  &__show-cta {
    font-size: 12px;
    line-height: 20px;
    color: $positive;
    text-transform: initial;
    padding: 0;
    margin-bottom: 12px;

    @media (max-width: $mobile) {
      font-family: $Open-sans-semibold;
      width: auto;
      background: $white;
      border-radius: 6px 6px 0 0;
      padding: 10px 10px 15px 10px;
      margin-bottom: 0;
      position: relative;
      bottom: -10px;
      right: 20px;
      z-index: 1;
    }

    :deep(.q-icon) {
      margin-right: 6px;
    }
  }

  :deep(.q-carousel__slide),
  :deep(.q-carousel .q-panel) {
    padding: 0;

    @media (max-width: $mobile) {
      padding: 0 10px;
    }
  }

  :deep(.q-icon img) {
    width: auto;
  }

  &__item {
    border-radius: 10px;
    padding: 27px;
    @media (max-width: $mobile) {
      border-radius: 12px;
      padding: 24px;
    }
  }

  .freezed .card-slider__item {
    background-color: #9e9e9e !important;
  }

  &__logo {
    font-size: 27px;
    margin-bottom: 27px;
    width: 100%;
    justify-content: flex-end;
    @media (max-width: $mobile) {
      font-size: 21px;
      margin-bottom: 24px;
    }
  }

  &__name {
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.6px;
    margin-bottom: 28px;
    @media (max-width: $mobile) {
      font-size: 22px;
      line-height: 30px;
      margin-bottom: 24px;
      letter-spacing: 0.53px;
    }
  }

  &__card-no {
    font-size: 14px;
    letter-spacing: 3.5px;
    line-height: 19px;
    margin-bottom: 14px;
    @media (max-width: $mobile) {
      margin-bottom: 13px;
    }

    > span {
      display: flex;
    }

    label {
      margin-right: 27px;
      display: flex;
      span {
        display: flex;
        align-items: center;
        margin: 0 2px;
        &:after {
          content: '';
          border-radius: 10px;
          background-color: $white;
          width: 9px;
          height: 9px;
          display: block;
        }
      }
    }
  }

  &__validity {
    font-size: 13px;
    letter-spacing: 1.6px;
    margin-right: 48px;
    font-family: $Open-sans-bold;

    @media (max-width: $mobile) {
      margin-right: 30px;
    }

    label {
      letter-spacing: 0.5px;
    }
  }

  &__cvv {
    display: flex;
    font-family: $Open-sans-bold;

    span {
      font-size: 24px;
      display: inline-block;
      margin-left: 5px;
      letter-spacing: 2px;
      line-height: 21px;
      position: relative;
      top: 4px;

      &.cvv-no {
        font-size: 13px;
        top: auto;
      }
    }
  }

  &__type {
    font-size: 23px;
    justify-content: flex-end;
    display: flex;
    @media (max-width: $mobile) {
      font-size: 20px;
    }
  }

  .material-icons,
  :deep(.q-carousel__navigation-icon .q-icon) {
    font-size: 8px;
    width: 8px;
    height: 8px;
    border-radius: 20px;
  }
  :deep(.q-carousel__navigation .q-btn) {
    padding: 0;
    margin: 0 4px;
    min-width: auto;
    min-height: auto;
  }

  :deep(.q-carousel__control) {
    color: rgba($positive, 0.2);
  }

  :deep(.q-carousel__navigation-icon--active .q-icon) {
    background: $positive;
    width: 16px;
  }

  :deep(.q-carousel__navigation--bottom) {
    bottom: 1px;

    @media (max-width: $mobile) {
      bottom: 25px;
    }
  }
}
</style>
