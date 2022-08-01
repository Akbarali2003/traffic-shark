import React from 'react';
import './Settings.scss';
import { DownloadImg, SettingsImg, ApkFile, PuzzleImg, CasionChip, Trophyimg } from '../../Assets/Images/index';
function Settings() {
    return (
        <div className='settings' >
            <div className="container">
                <div className="settings__wrap">
                    <h3 className='settings__title'>Топовые вертикали</h3>
                    <ul className='settings__list'>
                        <li className='settings__item'>
                            <span><DownloadImg /></span>
                            <h4 className='settings__subtitle'>Installs</h4>
                            <p className='settings__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </li>
                        <li className='settings__item'>
                            <span><SettingsImg /></span>
                            <h4 className='settings__subtitle'>Utilities</h4>
                            <p className='settings__text'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </li>
                        <li className='settings__item'>
                            <span><ApkFile /></span>
                            <h4 className='settings__subtitle'>APK</h4>
                            <p className='settings__text'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </li>
                        <li className='settings__item'>
                            <span><PuzzleImg /></span>
                            <h4 className='settings__subtitle'>Addons</h4>
                            <p className='settings__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </li>
                        <li className='settings__item'>
                            <span><CasionChip /></span>
                            <h4 className='settings__subtitle'>Gambling/Betting </h4>
                            <p className='settings__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </li>
                        <li className='settings__item'>
                            <span><Trophyimg /></span>
                            <h4 className='settings__subtitle'>Новые вертикали</h4>
                            <p className='settings__text'>Мы всегда в поиске новых трендовых вертикалей для наших вебмастеров</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Settings
