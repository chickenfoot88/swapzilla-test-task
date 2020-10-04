<template>
  <div class="d-flex flex-column">
    <base-select
      :options="cryptoExchanges"
      placeholder="Choose exchange"
      v-model="selectedExchange"
      class="mb-5"
    />
    <base-select
      :options="cryptoCurrencies"
      placeholder="Choose currency"
      v-model="selectedCurrency"
      class="mb-6"
    />
    <base-input
      v-model="WithdrawAmount"
      max="10000"
      placeholder="Withdraw amount"
      class="mb-6"
    />
    <v-btn
      class="text-normal font-weight-bold pa-6"
      color="primary"
      depressed
      @click="notification = true"
    >
      Withdraw
    </v-btn>
    <v-snackbar
      v-model="notification"
      timeout="2000"
      light
      top
      width="100px"
      max-width="100px"
    >
      <div class="d-flex">
        <v-icon class="mr-auto" color="success">done</v-icon>
        <span class="mr-auto">Funds were withdrawn</span>
      </div>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  name: 'Withdraw',
  data() {
    return {
      notification: false,
      selectedExchange: '',
      selectedCurrency: '',
      WithdrawAmount: '',
      cryptoExchanges: [
        {
          name: 'Binance',
          id: 'binance',
        },
        {
          name: 'Coinbase Pro',
          id: 'coinbasepro',
        },
        {
          name: 'Kraken',
          id: 'kraken',
        },
        {
          name: 'Binance',
          id: 'binance',
        },
        {
          name: 'Coinbase Pro',
          id: 'coinbasepro',
        },
        {
          name: 'Kraken',
          id: 'kraken',
        },
        {
          name: 'Binance',
          id: 'binance',
        },
      ],
      cryptoCurrencies: [
        {
          name: 'Ethereum',
          id: 'eth',
        },
        {
          name: 'Ripple',
          id: 'XRP',
        },
        {
          name: 'Litecoin',
          id: 'LTC',
        },
      ],
    }
  },
}
</script>
<style></style>
