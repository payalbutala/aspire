<template>
  <div class="row justify-between card-header">
    <div class="card-header__amount-section">
      <label class="card-header__label">Available balance</label>
      <div class="card-header__figure">
        <span class="card-header__sign q-pa-xs">S$</span>
        <span class="card-header__balance">3,000</span>
      </div>
    </div>
    <div class="card-header__cta-section">
      <q-btn
        icon="img:/icons/box.svg"
        label="New card"
        @click="addNewCard()"
        class="q-d-display"
      />
      <q-btn
        icon="img:/icons/box-mobile.svg"
        label="New card"
        @click="addNewCard()"
        class="q-m-display"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useCardStore } from 'src/stores/card';

const $q = useQuasar();
const cardStore = useCardStore();
const addNewCard = () => {
  $q.dialog({
    title: 'Prompt',
    message: 'What is your name? (Minimum 3 characters)',
    prompt: {
      model: '',
      isValid: (val) => val.length > 2,
      type: 'text',
    },
    cancel: true,
  }).onOk((data) => {
    cardStore.add(data);
  });
};
</script>
<style lang="scss" scoped>
.card-header {
  margin-bottom: 34px;
  align-items: flex-end;

  @media (max-width: $mobile) {
    margin-bottom: 30px;
    padding: 0 24px;
  }

  &__label {
    font-size: 14px;
    line-height: 16px;
    color: $shaft-black;
    display: inline-block;
    margin-bottom: 16px;

    @media (max-width: $mobile) {
      color: $white;
      font-family: $Open-sans-semibold;
    }
  }

  &__sign {
    font-size: 13px;
    line-height: 16px;
    color: $white;
    font-weight: bold;
    border-radius: 4px;
    margin-right: 12px;
    padding: 4px 12px;
    background: $malachite-green;
    display: flex;
    align-items: center;

    @media (max-width: $mobile) {
      margin-right: 10px;
    }
  }

  &__balance {
    font-size: 26px;
    line-height: 16px;
    font-family: $Open-sans-bold;
    color: $shaft-black;

    @media (max-width: $mobile) {
      color: $white;
    }
  }

  &__figure {
    display: flex;
    align-items: center;
  }

  &__cta-section {
    :deep(.q-btn) {
      font-size: 13px;
      line-height: 16px;
      font-family: $Open-sans-bold;
      text-transform: initial;
      padding: 10px;
      min-width: 109px;
      background: $primary;
      color: $white;

      @media (max-width: $mobile) {
        background: none;
        color: $secondary;
        margin: 5px 0;
        padding: 0;
      }
    }

    :deep(.q-icon) {
      font-size: 16px;
      margin-right: 8px;

      @media (max-width: $mobile) {
        color: $secondary;
        margin-right: 6px;
      }
    }
  }
}
</style>
