import Primevue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'
import { App } from 'vue'
import ToastService from 'primevue/toastservice'
import ConfirmService from 'primevue/confirmationservice'

const preset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{emerald.50}',
            100: '{emerald.100}',
            200: '{emerald.200}',
            300: '{emerald.300}',
            400: '{emerald.400}',
            500: '{emerald.500}',
            600: '{emerald.600}',
            700: '{emerald.700}',
            800: '{emerald.800}',
            900: '{emerald.900}',
            950: '{emerald.950}'
        }
    }
})

export function definePrimevue(app: App) {
    app.use(ToastService)
    app.use(ConfirmService)

    return {
        Primevue,
        config: {
            theme: {
                preset,
                options: {
                    darkModeSelector: '.dark'
                }
            },
            ripple: true
        }
    }
}
