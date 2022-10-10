<template>
  <div class="card-section">
    <img
      src="../../public/icons/logo-icon.svg"
      class="q-m-display company-logo"
    />
    <card-header></card-header>
    <div class="card-section__tab-wrap">
      <!-- {{ cardStore.activeCard }} -->
      <q-tabs
        v-model="tab"
        dense
        active-color="shaft-black"
        indicator-color="secondary"
        align="left"
        narrow-indicator
      >
        <q-tab name="debitCard" label="My debit cards" />
        <q-tab name="allCard" label="All company cards" />
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="debitCard">
          <!-- <div class="text-h6">My debit cards</div> -->
          <div class="row card-section__col-wrap">
            <div class="card-section__slider">
              <card-slider></card-slider>
              <card-action-item></card-action-item>
            </div>
            <div class="card-section__figure">
              <q-list>
                <card-details></card-details>
                <card-transactions></card-transactions>
              </q-list>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="allCard">
          <div class="text-h6">All company cards</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import CardSlider from '../components/CardSlider.vue';
import CardHeader from '../components/CardHeader.vue';
import CardDetails from '../components/CardDetails.vue';
import CardTransactions from '../components/CardTransactions.vue';
import CardActionItem from '../components/CardActionItem.vue';
import { useCardStore } from 'src/stores/card';

const tab = ref('debitCard');
const cardStore = useCardStore();

onMounted(() => {
  cardStore.loadCards();
});
</script>
<style lang="scss" scoped>
.card-section {
  padding: 60px;

  @media (max-width: $mobile) {
    padding: 30px 0 0;
  }

  .company-logo {
    position: absolute;
    right: 24px;
    top: 16px;
  }

  :deep(.q-tabs) {
    margin-bottom: 6px;
    @media (max-width: $mobile) {
      padding-left: 24px;
    }
  }

  :deep(.q-tab) {
    color: rgba($shaft-black, 0.3);
    font-family: $Avenir-next-regular;
    padding: 0;
    margin-right: 32px;
    min-height: auto;
    @media (max-width: $mobile) {
      font-family: $Open-sans-regular;
      flex: none;
    }
  }

  :deep(.q-tab--active .q-tab__label) {
    font-family: $Avenir-next-demi-bold;
    color: $shaft-black;

    @media (max-width: $mobile) {
      color: $white;
      font-family: $Open-sans-bold;
    }
  }

  :deep(.q-tab__label) {
    text-transform: initial;
    font-size: 14px;
    line-height: 20px;
    @media (max-width: $mobile) {
      font-size: 13px;
      line-height: 18px;
      color: rgb($white, 0.5);
    }
  }

  :deep(.q-tab__indicator) {
    border-radius: 2px;
  }

  :deep(.q-panel) {
    padding: 10px;

    @media (max-width: $mobile) {
      padding: 0;
    }
  }

  :deep(.q-tab-panels) {
    left: -10px;

    @media (max-width: $mobile) {
      left: auto;
    }
  }

  :deep(.q-tab-panel) {
    box-shadow: 0px 2px 12px rgb(0 0 0 / 14%);
    border-radius: 8px;
    padding: 31px 17px 40px;

    @media (max-width: $mobile) {
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
  }

  &__col-wrap {
    flex-wrap: nowrap;

    @media (max-width: $mobile) {
      flex-wrap: wrap;
    }
  }

  &__slider {
    max-width: 415px;
    margin: 0 23px;

    @media (max-width: $mobile) {
      width: 100%;
      max-width: none;
      margin: 0;
    }
  }

  &__slider {
    :deep(.q-carousel) {
      @media (max-width: $mobile) {
        background: $downriver-blue;
        overflow: initial;
      }
    }

    :deep(.q-carousel__slides-container) {
      @media (max-width: $mobile) {
        height: 100%;
        position: relative;
        z-index: 3;
      }
    }
  }

  &__figure {
    margin: 0 23px;
    margin-top: 32px;
    flex: 1;

    @media (max-width: $mobile) {
      margin-top: 10px;
    }
  }
}
</style>
