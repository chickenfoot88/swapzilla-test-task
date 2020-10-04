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

    <qr-code class="mb-6"></qr-code>

    <v-btn class="text-normal font-weight-bold pa-6" color="primary" depressed>
      Copy
    </v-btn>
  </div>
</template>
<script>
import QrCode from '@/components/QrCode'

export default {
  name: 'Deposit',
  components: {
    QrCode,
  },
  data() {
    return {
      selectedExchange: '',
      selectedCurrency: '',
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
