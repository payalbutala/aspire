import { defineStore } from 'pinia';
import { Card } from 'src/models/card';
import * as fromCard from 'src/server/card';
import { Notify } from 'quasar';
import * as random from 'src/helpers';

export const useCardStore = defineStore('card', {
  state: () => ({
    cards: [] as Card[],
    activeCard: {} as Card,
  }),
  getters: {
    card: (state) => state.activeCard,
  },
  actions: {
    loadCards() {
      fromCard.get().then((res) => {
        this.cards = [...res];
        this.loadActiveCard();
      });
    },
    add(name: string) {
      const card: Card = {
        id: random.randomId(),
        name: name,
        cardNumber: random.randomCardNumber(),
        validityDate: random.randomDate(),
        cvvDetails: random.randomCVV(),
        isFreeze: false,
        transactionLimit: 1000000,
        toPay: false,
        isReplace: false,
        isCancel: false,
        cardDetails: {
          cardStatus: 'active',
          cardType: 'credit',
          rewardPoints: 0,
        },
        transactions: [],
      };
      fromCard.add(card).then(() => {
        this.loadCards();
        this.setActiveCard(card.id);
        Notify.create({
          color: 'positive',
          position: 'top',
          message: 'Added Successfully',
          icon: 'save',
        });
      });
    },
    toggleFreeze(id: number) {
      const card = this.cards.find((ele) => ele.id == id);
      if (card) {
        card.isFreeze = !card.isFreeze;
        fromCard.update(id, card).then(() => {
          this.loadCards();
          Notify.create({
            color: 'positive',
            position: 'top',
            message: 'Update Successfully',
            icon: 'save',
          });
        });
      }
    },
    cancelCard(id: number) {
      const index = this.cards.findIndex((ele) => ele.id == id);
      if (index != -1) {
        fromCard.remove(id).then(() => {
          this.loadCards();
          this.activeCard = {} as Card;
          Notify.create({
            color: 'negative',
            position: 'top',
            message: 'Deleted Successfully',
            icon: 'report_problem',
          });
        });
      }
    },
    loadActiveCard() {
      if (this.activeCard && this.activeCard.id) {
        return;
      }
      this.activeCard = this.cards[0];
    },
    setActiveCard(id: number) {
      const card = this.cards.find((ele) => ele.id == id);
      if (card) this.activeCard = card;
    },
  },
});
