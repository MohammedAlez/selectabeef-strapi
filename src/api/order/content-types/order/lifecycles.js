module.exports= {
    async afterCreate(event){
        const {result} = event 
        console.log(result);
        const info = `
            ${result?.company?.length !== 0 ? `Le Nom de l'entreprise: ${result?.company}<br>` : ''}
            Le nom et prénom: ${result?.full_name}<br>
            email: ${result?.email}<br>
            L'adresse: ${result?.address}<br> 
            Le Numéro de téléphone: ${result?.phone_number}<br>
            ${result?.note?.length !== 0 ? `Note: ${result?.note}<br>` : ''}
        `.trim(); 
        try{
            await strapi.plugin('email').service('email').send({
                to: 'orders.selectabeef@gmail.com',
                from: result.email || 'orders.selectabeef@gmail.com',
                subject: 'Nouvelle command'+ ' #'+result?.id,
                text: info,
            });
        }catch(e){
            console.log("email has not been sent")
            console.log(e)
        }
    }
}