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

    <v-btn class="text-normal font-weight-bold pa-6" color="primary" depressed @click="notification = true">
      Copy
    </v-btn>

    <v-snackbar
      v-model="notification"
      timeout="1500"
      light
      top
      width="100px"
      max-width="100px"
    >
      <div class="d-flex">
        <v-icon class="mr-auto" color="success">assignment_turned_in</v-icon>
        <span class="mr-auto">QR code copied</span>
      </div>
    </v-snackbar>
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
      notification: false,
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
