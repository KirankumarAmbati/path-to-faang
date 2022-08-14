/**
 * 
 */

const menus = [
    {
        name: 'File',
        icon: 'file-icon',
        subMenus: [
            {
                name: 'New',
                icon: 'new-icon',
            },
            {
                name: 'Open',
                icon: 'open-icon',
            },
            {
                name: 'Edit',
                icon: 'edit-icon',
            },
            {
                name: 'Download',
                icon: 'download-icon',
                subMenus: [
                    {
                        name: 'Word',
                        icon: 'word-icon'
                    },
                    {
                        name: 'PDF',
                        icon: 'word-icon'
                    },
                ]
            },
        ]
    }, {
        name: 'Insert',
        icon: 'insert-icon',
        subMenus: [
            {
                name: 'Image',
                icon: 'image-icon',
                subMenus: [
                    {
                        name: 'Upload',
                        icon: 'upload-icon'
                    },
                    {
                        name: 'Drive',
                        icon: 'disk-icon'
                    },
                ]
            }
        ]
    }
];

function hasAllIcons(menus) {
    console.log({ menus });
    if(menus == null || menus.length === 0) return true;


    for(let menu of menus) {
        if(menu.icon == null) return false;
        
        if(menu.subMenus && !hasAllIcons(menu.subMenus)) return false;
    }
}

console.log(hasAllIcons(menus));