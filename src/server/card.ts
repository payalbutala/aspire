import { Notify } from 'quasar';
import { api } from 'src/boot/axios';
import { Card } from 'src/models/card';

export async function get(): Promise<Card[]> {
  return api
    .get('/cards')
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      Notify.create({
        color: 'negative',
        position: 'top',
        message: 'Loading failed',
        icon: 'report_problem',
      });
    });
}

export async function add(card: Card): Promise<Card> {
  return api
    .post('/cards', card)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      Notify.create({
        color: 'negative',
        position: 'top',
        message: 'Creation failed',
        icon: 'report_problem',
      });
    });
}

export async function update(id: number, card: Card): Promise<Card> {
  return api
    .put(`/cards/${id}`, card)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      Notify.create({
        color: 'negative',
        position: 'top',
        message: 'Update failed',
        icon: 'report_problem',
      });
    });
}

export async function remove(id: number): Promise<Card> {
  return api
    .delete(`/cards/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch(() => {
      Notify.create({
        color: 'negative',
        position: 'top',
        message: 'Delete failed',
        icon: 'report_problem',
      });
    });
}
