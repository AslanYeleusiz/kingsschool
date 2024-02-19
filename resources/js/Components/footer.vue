<template>
    <footer class="main-footer">
        <strong>Авторлық құқық &copy; {{ currentDate.getFullYear() }}
            <Link href="/">kingsschool.kz</Link>.</strong>
            Барлық құқықтар қорғалған.
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
