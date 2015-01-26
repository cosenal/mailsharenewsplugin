<?php
/**
 * ownCloud - mailsharenewsplugin
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Alessandro Cosentino <cosenal@gmail.com>
 * @copyright Alessandro Cosentino 2015
 */

namespace OCA\MailShareNewsPlugin\AppInfo;


if (\OCP\App::isEnabled('news') && 
    class_exists('OCA\News\Plugin\Client\Plugin')) {

        \OCA\News\Plugin\Client\Plugin::registerScript('mailsharenewsplugin', 
            'script');
        \OCA\News\Plugin\Client\Plugin::registerStyle('mailsharenewsplugin', 
            'style');
}
