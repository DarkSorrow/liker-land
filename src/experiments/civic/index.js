export default {
  name: 'civic-page',
  experimentID: 'CRTLXdjiRfy7OVqShuQwaA',
  isEligible: ({ route }) => !process.server && route.name === 'civic',
  variants: [{ name: 'origin', weight: 5 }, { name: 'variant', weight: 5 }],
};
