<template>
  <div class="card-update">
    <q-list>
      <q-item class="q-pa-none">
        <q-item-section
          :clickable="true"
          @click="toggleFreeze"
          :class="cardStore.activeCard?.isFreeze ? 'freezed' : ''"
        >
          <q-btn size="19px" icon="img:/icons/Freeze.svg" />
          <q-item-label v-if="!cardStore.activeCard?.isFreeze"
            >Freeze card</q-item-label
          >
          <q-item-label v-if="cardStore.activeCard?.isFreeze"
            >Unfreeze card</q-item-label
          >
        </q-item-section>
        <q-item-section>
          <q-btn size="19px" icon="img:/icons/set-spend-limit.svg" />
          <q-item-label>Set spend limit</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-btn size="19px" icon="img:/icons/gpay.svg" />
          <q-item-label>Add to GPay</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-btn size="19px" icon="img:/icons/replace.svg" />
          <q-item-label>Replace card</q-item-label>
        </q-item-section>
        <q-item-section>
          <q-btn
            size="19px"
            icon="img:/icons/deactivate.svg"
            @click="cancelCard"
            :disable="cardStore.cards.length <= 1"
          />
          <q-item-label>Cancel card</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useCardStore } from 'src/stores/card';
const cardStore = useCardStore();
const $q = useQuasar();
const toggleFreeze = () => {
  cardStore.toggleFreeze(cardStore.activeCard.id);
};
const cancelCard = () => {
  $q.dialog({
    title: 'Confirm',
    message: 'Are you sure you want to cancel the card?',
    cancel: 'No',
    ok: 'Yes',
  }).onOk(() => {
    cardStore.cancelCard(cardStore.activeCard.id);
  });
};
</script>
<style lang="scss" scoped>
.card-update {
  background: $zircon-white;
  border-radius: 16px;
  padding: 20px 12px;

  @media (max-width: $mobile) {
    padding: 20px 5px;
    position: relative;
    z-index: 1;
    top: -15px;
  }

  :deep(.q-item__section) {
    margin: 0 8px;
    cursor: pointer;
  }

  :deep(.q-item__section.freezed) {
  }

  :deep(.q-icon) {
    margin-bottom: 7px;
  }

  :deep(.q-item__label) {
    font-family: $Open-sans-regular;
    font-size: 13px;
    line-height: 18px !important; // to overwrite Quasar !important
    color: $downriver-blue;
    text-align: center;
  }
}
</style>
