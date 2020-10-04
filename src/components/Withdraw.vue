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
    <v-btn class="text-normal font-weight-bold pa-6" color="primary" depressed>
      Withdraw
    </v-btn>
  </div>
</template>
<script>
export default {
  name: 'Withdraw',
  data() {
    return {
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
