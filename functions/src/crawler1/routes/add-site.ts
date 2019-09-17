import { firestore } from 'firebase-admin';
import { check, validationResult, matchedData } from 'express-validator';

export const addsiteAction = (req: any, res: any) => {
    res.render("add-site", { "content": "good" });
}

export const validateSite = [
    check('site').exists().trim(),
    check('site_link').exists().trim(),
    check('cat_list_link').exists().trim(),
    check('cat_selector').exists().trim()
];

export const addsitePostAction = async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render("add-site", { 
            errors: errors,
            data: req.body
         });
    }

    const data = matchedData(req, { includeOptionals: true });
    await firestore().collection('site-crawl').doc().create(data);
    return req.redirect('/list-site');
}