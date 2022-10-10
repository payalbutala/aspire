<template>
  <q-layout view="lHh Lpr lFf" class="company-details">
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      class="company-details__drawer"
      :width="340"
    >
      <q-img
        src="../../public/images/aspire-logo.svg"
        class="company-details__logo q-d-display"
      />
      <q-list class="company-details__drawer-list">
        <q-item-label
          header
          class="company-details__drawer-title q-pa-none q-d-display"
        >
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import EssentialLink from 'components/EssentialLink.vue';

const essentialLinks = [
  {
    title: 'Home',
    icon: 'img:/icons/home.svg',
    iconMob: 'img:/icons/home-mobile.svg',
    link: '/home',
  },
  {
    title: 'Cards',
    icon: 'img:/icons/card.svg',
    iconMob: 'img:/icons/card.svg',
    link: '',
  },
  {
    title: 'Payments',
    icon: 'img:/icons/payments.svg',
    iconMob: 'img:/icons/payments-mobile.svg',
    link: '/payments',
  },
  {
    title: 'Credit',
    icon: 'img:/icons/credit.svg',
    iconMob: 'img:/icons/credit-mobile.svg',
    link: '/credit',
  },
  {
    title: 'Settings',
    icon: 'img:/icons/account.svg',
    iconMob: 'img:/icons/account-mobile.svg',
    link: '/settings',
  },
];
</script>

<style lang="scss">
@import '../css/app.scss';

.company-details {
  @media (max-width: $mobile) {
    background: $downriver-blue;
  }

  &__drawer {
    background: $downriver-blue;
    padding: 48px 40px 0 48px;

    @media (max-width: $mobile) {
      background: $white;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      height: auto !important;
      width: 100% !important;
      padding: 10px 0;
      box-shadow: (0 -3px 6px #00000014);
    }
  }

  &__drawer-list {
    @media (max-width: $mobile) {
      display: flex;
    }
  }

  :deep(.q-drawer) {
    font-size: 15px;

    @media (max-width: $mobile) {
      top: auto;
      width: 100% !important;
      transform: initial !important;
    }
  }

  :deep(.q-list) {
    @media (max-width: $mobile) {
      display: flex;
    }
  }

  &__logo {
    max-width: 125px;
    margin-bottom: 19px;
  }

  &__drawer-title {
    font-size: 15px;
    line-height: 20px !important;
    color: rgba($white, 0.3);
    margin-bottom: 81px;
  }
}
</style>
