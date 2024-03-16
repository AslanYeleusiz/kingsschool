<template>
    <div v-if='$page.props.flash.image' class="cstmodal" :style="{ backgroundImage: 'url(/storage/files/' + $page.props.flash.image + ')',
               backgroundSize: 'calc(100% + ' + (zoomLevel - 100) + '%)',
               backgroundPosition: backgroundPositionX + '% ' + backgroundPositionY + '%' }" ref="modal" @mousedown="startDrag" @mousemove="drag" @mouseup="endDrag">
        <div class="navbar">
            <button @click="toggleFullscreen" class="btn"><img src="/images/svg/expand.svg" alt=""></button>
            <button @click="zoomIn" class="btn"><img src="/images/svg/zoom_in.svg" alt=""></button>
            <button @click="zoomOut" class="btn"><img src="/images/svg/zoom_out.svg" alt=""></button>
            <exitBtn @click.native="closeModal()" />
        </div>
    </div>
</template>


<script>
    import exitBtn from './forms/exitDefaultBtn.vue'

    export default {
        components: {
            exitBtn,
        },
        data() {
            return {
                zoomLevel: 80,
                maxZoom: 200,
                minZoom: 50,
                backgroundPositionX: 50,
                backgroundPositionY: 50,
                isDragging: false, // флаг, указывающий, что идет перетаскивание
                startDragX: 0, // начальная позиция при начале перетаскивания по горизонтали
                startDragY: 0, // начальная позиция при начале перетаскивания по вертикали
            };
        },
        methods: {
            zoomIn() {
                if (this.zoomLevel < this.maxZoom) {
                    this.zoomLevel += 10;
                }
            },
            zoomOut() {
                if (this.zoomLevel > this.minZoom) {
                    this.zoomLevel -= 10;
                }
            },
            startDrag(event) {
                // Начало перетаскивания
                this.isDragging = true;
                this.startDragX = event.clientX;
                this.startDragY = event.clientY;
            },
            drag(event) {
                // Перетаскивание
                if (this.isDragging) {
                    const offsetX = event.clientX - this.startDragX;
                    const offsetY = event.clientY - this.startDragY;
                    this.backgroundPositionX += (offsetX / this.$refs.modal.offsetWidth) * 100 * (this.zoomLevel >= 100 ? -1 : 1);
                    this.backgroundPositionY += (offsetY / this.$refs.modal.offsetHeight) * 100;
                    this.startDragX = event.clientX;
                    this.startDragY = event.clientY;
                }
            },
            endDrag() {
                // Окончание перетаскивания
                this.isDragging = false;
            },
            toggleFullscreen() {
                const modal = this.$refs.modal;
                if (!document.fullscreenElement) {
                    modal.requestFullscreen().catch(err => {
                        console.error('Failed to enable fullscreen mode', err);
                    });
                } else {
                    document.exitFullscreen();
                }
            },
            closeModal(){
                const modal = this.$refs.modal;
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                }
                this.$page.props.flash.image = null;
            }
        }
    }

</script>

<style lang="scss" scoped>
    .fadePopup-enter-active,
    .fadePopup-leave-active {
        transition: .2s;
    }

    .fadePopup-enter,
    .fadePopup-leave-to {
        opacity: 0;
        transform: translateY(25px);
        transition: 0.2s;
    }

    .btn img {
        width: 28px;
        height: 28px;
    }

    .cstmodal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: #fff;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        z-index: 2035;

        &:hover {
            cursor: grab;
        }

        &:active {
            cursor: grabbing;
        }

        .navbar {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 20px;
            padding: 10px 20px;
            background: rgba(255,255,255,0.7);
        }
    }

</style>
