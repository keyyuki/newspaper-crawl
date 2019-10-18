import { firestore } from 'firebase-admin';

export const listsiteAction = async (req: any, res: any) => {
    
    let result = null;
    
    const snaps = await firestore().collection('site-crawl').limit(10).get();
    if(!snaps.empty){
        result = snaps.docs.map(doc => doc.data());
    }
    
    res.render('list-site', {
        data: result
    })
    
}