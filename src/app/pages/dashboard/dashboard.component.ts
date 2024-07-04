import { Component, ViewChild } from '@angular/core';
import { ModalConfig, ModalComponent } from '../../_metronic/partials';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  modalConfig: ModalConfig = {
    modalTitle: 'Modal title',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel'
  };

  cards = [
    {
      icon: "./assets/media/icons/duotune/coding/cod001.svg",
      title: "Datasets",
      description: "Manage your subscriptions, billing details, and view or download invoices."
    },
    {
      icon: "./assets/media/icons/duotune/coding/cod007.svg",
      title: "Inference engine",
      description: "View and manage user roles in your organization."
    },
    {
      icon: "./assets/media/icons/duotune/coding/cod003.svg",
      title: "Billing",
      description: "Manage your subscriptions, billing details, and view or download invoices."
    },
    {
      icon: "./assets/media/icons/duotune/coding/cod004.svg",
      title: "Preparation",
      description: "View and manage user roles in your organization."
    },
    {
      icon: "./assets/media/icons/duotune/coding/cod005.svg",
      title: "Chatbot",
      description: "Manage your subscriptions, billing details, and view or download invoices."
    },
    {
      icon: "./assets/media/icons/duotune/coding/cod006.svg",
      title: "User Management",
      description: "View and manage user roles in your organization."
    },
    {
      icon: "./assets/media/icons/duotune/coding/cod007.svg",
      title: "Training",
      description: "Manage your subscriptions, billing details, and view or download invoices."
    },
    {
      icon: "./assets/media/icons/duotune/coding/cod010.svg",
      title: "User Management",
      description: "View and manage user roles in your organization."
    },
    {
      icon: "./assets/media/icons/duotune/coding/cod010.svg",
      title: "Billing",
      description: "View and manage user roles in your organization."
    }
  ];

  @ViewChild('modal') private modalComponent: ModalComponent;
  constructor() {}

  async openModal() {
    return await this.modalComponent.open();
  }
}
