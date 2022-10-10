<template>
  <q-expansion-item
    icon="img:/icons/transactions.svg"
    label="Recent transactions"
    class="card-transactions"
    expand-icon="img:/icons/down-arrow.svg"
  >
    <!-- <div class="q-pa-md"> -->
    <q-list>
      <q-item
        v-for="item in cardStore.activeCard?.transactions"
        :key="item.id"
        class="q-pa-none"
      >
        <q-item-section top avatar>
          <q-avatar
            :class="'bg-icon ' + item.color"
            text-color="black"
            :icon="'img:/icons/' + item.category + '.svg'"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ item.name }}</q-item-label>
          <q-item-label class="card-transactions__date">{{
            item.date
          }}</q-item-label>
          <q-list class="q-pa-none card-transactions__note">
            <q-item top avatar class="flex row q-pa-none">
              <q-avatar
                class="bg-icon"
                text-color="black"
                icon="img:/icons/business-and-finance.svg"
              />
              <q-item-label>{{
                item.type == 'debit'
                  ? 'Refund on debit card'
                  : 'Charged to debit card'
              }}</q-item-label>
            </q-item>
          </q-list>
        </q-item-section>

        <q-item-section
          side
          top
          class="card-transactions__amount"
          :class="item.type == 'debit' ? '' : 'green'"
        >
          <q-item-label caption
            ><span>{{ item.type == 'debit' ? '-' : '+' }}</span
            >S$ <span class="amount">{{ item.amount }}</span></q-item-label
          >
        </q-item-section>
        <q-item-section side top class="card-transactions__details">
          <q-btn size="7px" round icon="img:/icons/next.svg" />
          <!-- <q-icon name="plus" color="yellow" /> -->
        </q-item-section>
      </q-item>
      <q-item v-if="!cardStore.activeCard?.transactions?.length">
        No Transaction present
      </q-item>
    </q-list>
    <q-btn
      v-if="cardStore.activeCard?.transactions?.length"
      label="View all card transactions"
      class="card-transactions__view-cta"
    />
    <!-- </div> -->
    <!-- <q-card>
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius
        reprehenderit eos corrupti commodi magni quaerat ex numquam, dolorum
        officiis modi facere maiores architecto suscipit iste eveniet doloribus
        ullam aliquid.
      </q-card-section>
    </q-card> -->
  </q-expansion-item>
</template>
<script setup lang="ts">
import { useCardStore } from 'src/stores/card';
const cardStore = useCardStore();
</script>
<style lang="scss" scoped>
.card-transactions {
  border: 1px solid $foam-blue;
  border-radius: 8px;

  &__amount {
    font-size: 14px;
    line-height: 18px;
    color: $shaft-black;
    font-family: $Open-sans-bold;

    &.green {
      :deep(.text-caption) {
        color: $positive !important;
      }
    }
  }

  &__details {
    padding-left: 10px;
    top: 4px;
    position: relative;
  }

  &__view-cta {
    font-size: 13px;
    font-family: $Open-sans-semibold;
    line-height: 18px;
    color: $positive;
    text-transform: initial;
    background: $hint-green;
    padding: 14px 0;
    width: 100%;
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

  :deep(.q-expansion-item__content .q-item__label) {
    font-family: $Open-sans-semibold;
  }

  :deep(.q-expansion-item__content) {
    background: $hint-green;
  }

  :deep(.q-expansion-item__content .card-transactions__amount .q-item__label) {
    font-size: 14px;
    line-height: 18px;
    color: $shaft-black;
    font-family: $Open-sans-bold;
  }
  :deep(.q-expansion-item__content .card-transactions__date.q-item__label) {
    font-size: 13px;
    line-height: 18px;
    color: rgba(170, 170, 170, 1);
    font-family: $Open-sans-regular;
    margin-bottom: 12px;
  }

  :deep(.q-expansion-item__content > .q-list) {
    background: $white;
    border: 1px solid $gallery-white;
    border-radius: 0 0 8px 8px;
    padding: 24px;
    margin: 0 -1px;
    border-top: 0;
  }

  :deep(.q-expansion-item__content > .q-list > .q-item) {
    border-bottom: 1px solid $wild-white;
    margin-top: 16px;
    padding-bottom: 16px;
  }
  :deep(.q-expansion-item__content > .q-list .q-item) {
    min-height: auto;
  }
  :deep(.q-expansion-item__content > .q-list > .q-item:first-child) {
    margin: 0;
  }
  :deep(.q-expansion-item__content > .q-list > .q-item:last-child) {
    border-bottom: none;
    padding: 0;
  }

  :deep(.card-transactions__note .q-item__label) {
    font-size: 12px;
    line-height: 18px !important;
    color: $primary;
  }

  :deep(.q-avatar) {
    font-size: 48px;
    &.blue {
      background: rgba($fun-blue, 0.1);
    }
    &.green {
      background: rgba($egg-blue, 0.1);
    }
    &.pink {
      background: rgba($silver-pink, 0.1);
    }
  }

  :deep(.card-transactions__note .q-avatar) {
    width: auto;
    height: auto;
    margin-right: 8px;
  }
  :deep(.card-transactions__note .q-avatar__content) {
    width: 24px;
    height: 20px;
    background: $primary;
    font-size: 10px;
    line-height: 18px !important;
    color: $primary;
    border-radius: 10px;
  }
  :deep(.card-transactions__note .q-avatar .q-icon) {
    font-size: 10px;
    color: $white;
  }

  :deep(.q-item__section--avatar) {
    min-width: auto;
    padding-right: 12px;
  }

  :deep(.q-avatar .q-icon) {
    font-size: 16px;
  }
}
</style>
