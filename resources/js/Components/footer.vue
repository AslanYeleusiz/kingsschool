<template>
    <footer class="main-footer">
        <strong>Авторское право &copy; {{ currentDate.getFullYear() }}
            <Link href="/">kingsschool.kz</Link>.</strong>
            Все права защищены.
    </footer>
</template>

<script>
import {Link} from '@inertiajs/inertia-vue3'
    export default {
        components: {
            Link
        },
        data() {
            return {
                currentDate: new Date,
            }
        }
    }
</script>
