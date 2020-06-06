import React from "./node_modules/react";

import { ReactComponent as NotificationLogo } from "../../images/icons/notification.svg";
import { ReactComponent as DownloadLogo } from "../../images/icons/download.svg";
import { ReactComponent as FolderLogo } from "../../images/icons/folder.svg";
import { ReactComponent as UserLogo } from "../../images/icons/person-user.svg";
import { ReactComponent as SearchLogo } from "../../images/icons/search.svg";
import { ReactComponent as HelpLogo } from "../../images/icons/help.svg";
import { ReactComponent as LoggedUserLogo } from "../../images/icons/logged-user.svg";

import "./toolbar.scss";

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
