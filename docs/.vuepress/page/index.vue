<template>
    <demo-block :demos="demos" :source="source" :path="path" :raw-source="rawSource" :description="description">`
    </demo-block>
</template>
<script>

export default {
    props: {
        source:String,
        path: String,
        rawSource: String,
        description: String
    },
    setup(props) {
        const demos = import.meta.globEager(`../../examples/*.vue`)
        return {
            demos,
            source: props.source,
            path: props.path,
            rawSource: props.rawSource,
            description: props.description
        }
    },
}
</script>