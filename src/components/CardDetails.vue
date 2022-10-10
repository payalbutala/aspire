<template>
  <q-expansion-item
    icon="img:/icons/card-details.svg"
    label="Card details"
    class="card-details"
    expand-icon="img:/icons/down-arrow.svg"
  >
    <ul>
      <li class="card-details__item">
        <label class="card-details__field">Card Status</label>
        <span class="card-details__val">{{
          cardStore.activeCard?.cardDetails?.cardStatus
        }}</span>
      </li>
      <li class="card-details__item">
        <label class="card-details__field">Card Type</label>
        <span class="card-details__val">{{
          cardStore.activeCard?.cardDetails?.cardType
        }}</span>
      </li>
      <li class="card-details__item">
        <label class="card-details__field">Raward Points</label>
        <span class="card-details__val">{{
          cardStore.activeCard?.cardDetails?.rewardPoints
        }}</span>
      </li>
    </ul>
  </q-expansion-item>
</template>
<script setup lang="ts">
import { useCardStore } from 'src/stores/card';
const cardStore = useCardStore();
</script>
<style lang="scss" scoped>
.card-details {
  border-radius: 8px;
  margin-bottom: 24px;

  &__item {
    list-style: none;
    border-bottom: 1px solid $wild-white;
    margin-top: 16px;
    padding-bottom: 16px;

    &:first-child {
      margin: 0;
    }

    &:last-child {
      padding: 0;
      border: none;
    }
  }

  &__field {
    font-size: 14px;
    line-height: 18px !important;
    color: $downriver-blue;
    font-family: $Open-sans-semibold;
  }

  &__val {
    font-size: 13px;
    line-height: 18px;
    color: $silver-chalice;
    font-family: $Open-sans-regular;
    text-transform: capitalize;
    display: block;
    margin-top: 4px;
  }

  :deep(.q-expansion-item__content ul) {
    background: $white;
    border: 1px solid $gallery-white;
    border-radius: 0 0 8px 8px;
    padding: 24px;
    margin: 0;
    border-top: 0;
  }

  :deep(.q-link) {
    padding: 24px;
    border-radius: 8px;
    background-color: $selagi-white;
    box-shadow: 0 0 8px #0000000a;
    border: 1px solid $wild-white;
    position: relative;
    z-index: 2;
    margin: -1px;
  }

  :deep(.q-item__label) {
    font-size: 14px;
    line-height: 18px !important;
    color: $shaft-black;

    @media (max-width: $mobile) {
      font-family: $Open-sans-semibold;
    }
  }

  :deep(.q-item__section--avatar) {
    min-width: auto;
    padding-right: 12px;
  }
}
</style>
