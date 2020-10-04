<template>
  <div class="d-flex flex-column">
    <base-select
      :options="cryptoExchanges"
      label="From"
      placeholder="Choose exchange"
      v-model="fromSelectedExchange"
      class="mb-5"
    />
    <base-select
      :options="cryptoExchanges"
      label="To"
      placeholder="Choose exchange"
      v-model="toSelectedExchange"
      class="mb-5"
    />
    <base-select
      :options="cryptoCurrencies"
      placeholder="Choose currency"
      v-model="selectedCurrency"
      class="mb-5"
    />
    <base-input-with-amount v-model="rebalanceAmount" :amountOptions="amountOptions" placeholder="Input amount"/>
  </div>
</template>
<script>
export default {
  name: 'Rebalance',
  data() {
    return {
      fromSelectedExchange: '',
      toSelectedExchange: '',
      selectedCurrency: '',
      rebalanceAmount: '',
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
      amountOptions: [
        10,
        25,
        50,
        100
      ]
    }
  },
}
</script>
<style></style>
