export default {
    name: 'produto',
    title: 'Produto',
    type: 'document',
    fields: [
        {
            name: 'imagem',
            title: 'Imagem',
            type: 'array',
            of: [{ type: 'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'nome',
            title: 'Nome',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'preco',
            title: 'Preço',
            type: 'number',
        },
        {
            name: 'detalhes',
            title: 'Detalhes',
            type: 'string'
        }

    ]
}