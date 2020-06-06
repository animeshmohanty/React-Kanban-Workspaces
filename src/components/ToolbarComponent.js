import React from 'react';
import { ReactComponent as NotificationLogo } from "./notification.svg";
import { ReactComponent as DownloadLogo } from "./download.svg";
import { ReactComponent as FolderLogo } from "./folder.svg";
import { ReactComponent as UserLogo } from "./person-user.svg";
import { ReactComponent as SearchLogo } from "./search.svg";
import { ReactComponent as HelpLogo } from "./help.svg";
import { ReactComponent as LoggedUserLogo } from "./logged-user.svg";

import "./ToolbarComponent.scss";

const Toolbar = () => (
  <section className="toolbar-container">
    <div className="toolbar-logos">
      <NotificationLogo />
      <DownloadLogo />
    </div>

    <div className="update-label">Update</div>
    <div className="toolbar-logos">
      <FolderLogo />
      <UserLogo />
      <SearchLogo />
      <HelpLogo />
      <LoggedUserLogo />
    </div>
  </section>
);

export default Toolbar;
