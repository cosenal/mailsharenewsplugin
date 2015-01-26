/**
 * ownCloud - mailsharenewsplugin
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Alessandro Cosentino <cosenal@gmail.com>
 * @copyright Alessandro Cosentino 2015
 */

(function (window, $, News, OC, undefined) {
    'use strict';

    News.addArticleAction(function(actionsElement, article) {
        var li = $('<li>')
            .addClass('util')
            .addClass('article-plugin-mailshare');
        var button = $('<button>')
        	.addClass('icon-mail')
            .attr('title', t('mailsharenewsplugin', 'Share by email'));
        button.click(function (event) {
            var subject = encodeURIComponent(article.title + ' ' + 
                t('mailsharenewsplugin', '(shared via ownCloud News)')); 
            var body = encodeURIComponent(t('mailsharenewsplugin', 
                'Full article at') + ' ' + article.url);
            var url = 'mailto:?subject=' + subject + '&body=' + body; 
            window.open(url);

            event.stopPropagation();  // prevent expanding in compact mode
        });

        li.append(button);
        actionsElement.append(li);
    });

})(window, jQuery, News, OC);